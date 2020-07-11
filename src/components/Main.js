import React, { Component } from 'react';
import NavigationBar from './Navigation';
import '../App.css';
import bubbleSort from '../sort_functions/bubbleSort';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: 100,
            randArray: [],
            size_factor: 100,
        };
    }

    componentDidMount() {
        this.generateRandomArray();
    }

    getElementNumber = async (value) => {
        await this.setState({
            elements: value
        });
        this.generateRandomArray();
    }

    generateRandomArray = () => {
        let randArray = []
        for(let i = 0; i < this.state.elements; i++){
            randArray = [...randArray, (Math.floor(Math.random() * 200)+5)];
        }
        this.setState({
            randArray: randArray,
            size_factor: this.state.elements
        });
        console.log(randArray.length);
    }

    bubbleSort = () => {
        let array_bars = document.getElementsByClassName('array-bar');
        let animations  = bubbleSort(this.state.randArray, []);
        for(let animation of animations){
            animation.comparison[0] = array_bars[animation.comparison[0]];
            animation.comparison[1] = array_bars[animation.comparison[1]];
        }
        //console.log(animations);
        for(let i = 0; i < animations.length; i++){
            let animation = animations[i];
            if(animation.comp_true){
                setTimeout(() => {
                    animation.comparison[1].style.backgroundColor = "#d9534f";
                    animation.comparison[0].style.backgroundColor = "#292b2c";
                    let temp = animation.comparison[0].style.height;
                    animation.comparison[0].style.height = animation.comparison[1].style.height;
                    animation.comparison[1].style.height = temp; 
                }, (i+1)*2);
            }
            else{
                setTimeout(() => {
                    animation.comparison[0].style.backgroundColor = "#292b2c";
                    animation.comparison[1].style.backgroundColor = "#d9534f";
                }, (i+1)*2);
            }
        }
        setTimeout(() => {
            for(let i = 0; i < array_bars.length; i++){
                let val = array_bars[i];
                setTimeout(() => {
                    val.style.backgroundColor = "#292b2c";
                }, (i+1) * 2);
            }
        }, (animations.length+2) * 2);
    }

    insertionSort = () => {
        console.log('Insertion Sort Logic');
    }

    mergeSort = () => {
        console.log('Merge Sort Logic');
    }

    quickSort = () => {
        console.log('Quick Sort logic');
    }
    render() {
        const array_values = this.state.randArray.map((value, idx) => {
            let h_value = (value*3);
            let w_value = ((200/this.state.size_factor)*0.5);
            return(<div key={idx} className="array-bar" style={{"height": `${h_value}px`, "width": `${w_value}%`}}></div>);
        });
        return(
            <>
            <NavigationBar 
                onChange={this.getElementNumber} 
                value={this.state.elements} 
                onClick={this.generateRandomArray} 
                bubbleSort={this.bubbleSort}
                insertionSort={this.insertionSort}
                quickSort={this.quickSort}
                mergeSort={this.mergeSort}
            />
            <div className="d-flex justify-content-center">
                {array_values}
            </div>
            </>
        );
    }
}

export default Main;