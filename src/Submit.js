import React, { Component } from 'react'
import Ingredients from './Ingredients'
import IngrediantList from './IngrediantList'

import Dropzone from 'react-dropzone'
import request from 'superagent'

const CLOUDINARY_UPLOAD_PRESET = 'qccw2xih'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/pic-hub/upload';

class Submit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: JSON.parse(localStorage.getItem('recipes')) || [],
            newRecipe: {
                name: '',
                description: '',
                items: []
            },
            uploadedFileCloudinaryUrl: ''
        }
        this.submitRecipe = this.submitRecipe.bind(this)
        this.onImageDrop = this.onImageDrop.bind(this)
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
          })
      
          this.handleImageUpload(files[0])
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                            .field('file', file);
    
        upload.end((err, response) => {
          if (err) {
            console.error(err);
          }
    
          if (response.body.secure_url !== '') {
            this.setState({
              uploadedFileCloudinaryUrl: response.body.secure_url
            });
          }
        });
      }
    

    addIngrediants(ingrediant, quantity) { 
        //console.log("added ingre submit.js", quantity, ingrediant)
        let newRecipe = this.state.newRecipe
        newRecipe.items.push({quantity, ingrediant})
        this.setState({newRecipe})
        //console.log(this.state, this.state.newRecipe)   
    }

    submitRecipe() {
        this.props.history.push('/')
        //console.log(this.name.value, this.description.value)
        let newRecipe = this.state.newRecipe
        newRecipe.name = this.name.value
        newRecipe.description = this.description.value
        newRecipe.image = this.state.uploadedFileCloudinaryUrl
        this.setState({newRecipe})
        let recipes = this.state.recipes
        recipes.push(newRecipe)
        this.setState({recipes})
        localStorage.setItem('recipes', JSON.stringify(recipes))
        console.log(recipes)
    }
    
    render() {         console.log(this.state)
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1>Submit a recipe</h1>
                    <form>
                        <Dropzone
                            multiple={false}
                            accept="image/*"
                            onDrop={this.onImageDrop}>
                            <p>Drop an image or click to select a file to upload.</p>
                        </Dropzone>
                        <div>
                            {this.state.uploadedFileCloudinaryUrl === '' ? null :
                            <div>
                            <p>{this.state.uploadedFile.name}</p>
                            <img src={this.state.uploadedFileCloudinaryUrl} />
                            </div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="name of the recipe" 
                            ref={(input) => {this.name = input}} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" id="description" placeholder="enter a brief description" 
                            ref={(input) => {this.description = input}} />
                        </div>
                        <IngrediantList recipe={this.state.newRecipe}/>
                        <Ingredients addIngrediants={this.addIngrediants.bind(this)}/>
                        <button type="submit" className="btn btn-default" onClick={this.submitRecipe} >Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Submit