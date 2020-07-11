import React from 'react';
import { Navbar, NavItem, Nav, Button, ButtonGroup, Input, Label} from 'reactstrap';

const NavigationBar = (props) => {
    return(
        <div>
            <Navbar color="dark" className="text-light" dark expand="md">
                <Nav className="mr-auto">
                    <NavItem>
                        <Button color="dark" onClick={() => {props.onClick()}}>Generate Random Array</Button>
                    </NavItem>
                </Nav>
                <Nav className="mr-auto">
                    <NavItem>
                        <ButtonGroup color="dark">
                            <Button color="dark" onClick={() => {props.bubbleSort()}}>Bubble Sort</Button>
                            <Button color="dark" onClick={() => {props.insertionSort()}}>Insertion Sort</Button>
                            <Button color="dark" onClick={() => {props.quickSort()}}>Quick Sort</Button>
                            <Button color="dark" onClick={() => {props.mergeSort()}}>Merge Sort</Button>
                        </ButtonGroup>
                    </NavItem>
                </Nav>
                <Nav className="mr-auto">
                    <NavItem hidden={props.hide_buttons}>
                        <Label>Elements: {props.value}</Label>
                        <Input type="range" value={props.value} min={10} max={250} step={1} value={props.value} onChange={(event) => {props.onChange(event.target.value)}}/>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavigationBar;