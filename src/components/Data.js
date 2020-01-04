import React, { Component } from "react";
import {
  CardDeck,
  Col,
  Button,
  Form, 
  FormGroup,
  Label,
  CustomInput,
  Table
} from "reactstrap";

class Data extends Component {
  // adds inbuilt data
  constructor(props) {
    super(props);
  
    this.state = {
      selectedType: [],
      dichotomiesTable: [],
      functionsTable: [],
      types: [
          {
            type: "LII",
            functions: ["Ti", "Ni", "Fi", "Si", "Ne", "Fe", "Se", "Te"],
          },{
            type: "ILE",
            functions: ["Ne", "Te", "Se", "Fe", "Ti", "Si", "Fi", "Ni"],
          },{
            type: "SEI",
            functions: ["Si", "Fi", "Ni", "Ti", "Fe", "Ne", "Te", "Se"],
          },{
            type: "ESE",
            functions: ["Fe", "Se", "Te", "Ne", "Si", "Ti", "Ni", "Fi"],
          },{
            type: "LSI",
            functions: ["Ti", "Si", "Fi", "Ni", "Se", "Fe", "Ne", "Te"],
          },{
            type: "SLE",
            functions: ["Se", "Te", "Ne", "Fe", "Ti", "Ni", "Fi", "Si"],
          },{
            type: "IEI",
            functions: ["Ni", "Fi", "Si", "Ti", "Fe", "Se", "Te", "Ne"],
          },{
            type: "EIE",
            functions: ["Fe", "Ne", "Te", "Se", "Ni", "Ti", "Si", "Fi"],
          },{
            type: "ILI",
            functions: ["Ni", "Ti", "Si", "Fi", "Te", "Se", "Fe", "Ne"],
          },{
            type: "LIE",
            functions: ["Te", "Ne", "Fe", "Se", "Ni", "Fi", "Si", "Ti"],
          },{
            type: "ESI",
            functions: ["Fi", "Si", "Ti", "Ni", "Se", "Te", "Ni", "Fe"],
          },{
            type: "SEE",
            functions: ["Se", "Fe", "Ne", "Te", "Fi", "Ni", "Ti", "Si"],
          },{
            type: "SLI",
            functions: ["Si", "Ti", "Ni", "Fi", "Te", "Ne", "Fe", "Se"],
          },{
            type: "LSE",
            functions: ["Te", "Se", "Fe", "Ne", "Si", "Fi", "Ni", "Ti"],
          },{
            type: "EII",
            functions: ["Fi", "Ni", "Ti", "Si", "Ne", "Te", "Si", "Fe"],
          },{
            type: "IEE",
            functions: ["Ne", "Fe", "Se", "Te", "Fi", "Si", "Ti", "Ni"]
          }
      ],
      dichotomies: [
          {
            dicho1: "external",
            dicho2: "internal",
            places: [[1, 2, 3, 4], [5, 6, 7, 8]],
            description1: "How you deal with the external world.",
            description2: "How you behave in close distance."
          },{
            dicho1: "values",
            dicho2: "tools",
            places: [[1, 4, 7, 8], [2, 3, 5, 6]],
            description1: "Long term motivation, accumulates problems, lack of energy.",
            description2: "Solves problems, excess energy."
          },{
            dicho1: "master",
            dicho2: "slave",
            places: [[1, 2, 5, 8], [3, 4, 6, 7]],
            description1: "Coordinates the type's activity, sends energy pulses.",
            description2: "Follows master, receives energy pulses." 
          },{
            dicho1: "resistant",
            dicho2: "unstable",
            places: [[1, 3, 6, 8], [2, 4, 5, 7]],
            description1: "Works stably and systematically",
            description2: "Needs strong motivation to keep going."
          },{
            dicho1: "automatic",
            dicho2: "conscious",
            places: [[1, 2, 6, 7], [3, 4, 5, 8]],
            description1: "You aren't so aware of the judgements made by this function.",
            description2: "You are aware of the judgements made by this function." 
          },{
            dicho1: "kinetic",
            dicho2: "potential",
            places: [[1, 3, 5, 7], [2, 4, 6, 8]],
            description1: "Consumes more energy than it accumulates. Does.",
            description2: "Accumulates energy. More prone to verbalizing instead of doing." 
          },{
            dicho1: "accelerating",
            dicho2: "slowing",
            places: [[1, 4, 5, 6], [2, 3, 7, 8]],
            description1: "Energizes the type.",
            description2: "De-energizes the type."
        }
      ]
    };
    this.state.selectedType = 0

    this.getFunctions = (list, type, dicho) =>
    {
      return (
        list.places[dicho].map((list2, index) => {
          return(
              this.state.types[type].functions[list2 - 1] + " "
          );
        })
      )
    }

    this.showTypeFunctions = (index) =>
    {
      return (
        <Table bordered>
          <thead>
            <tr><th colspan="4">Functions</th></tr>
            <tr>
              <th>1</th><th>2</th><th>3</th><th>4</th>
            </tr>
          </thead>
          <tbody>
          <tr>
          {
            this.state.types[index].functions.slice(0,4).map((list) => {
              return(
              <td>{list}</td>
              )})
              
          }
          </tr>
          <tr>
          {
            this.state.types[index].functions.slice(4,8).map((list) => {
              return(
                <td>{list}</td>
              )})
          }
          </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>5</th><th>6</th><th>7</th><th>8</th>
            </tr>
          </tfoot>
        </Table>
      )
    }
    
    this.showTypeDichotomies = (type) => {
      return (
        <Table>
          <thead>
            <tr>
              <th>Functions</th>
              <th colspan="2"><center>Dichotomies</center></th>
              <th>Functions</th>
            </tr>
          </thead>
          <tbody>
        {
          this.state.dichotomies.map((list, index) => {
            return(
                <tr>
                  <td>
                    {this.state.types[type].functions[list.places[0][0] - 1] + " "}
                    {this.state.types[type].functions[list.places[0][1] - 1]}
                    <br></br>
                    {this.state.types[type].functions[list.places[0][2] - 1] + " "}
                    {this.state.types[type].functions[list.places[0][3] - 1]}
                  </td>
                  <td> <b>{list.dicho1}</b> <br></br> {list.description1} </td>
                  <td> <b>{list.dicho2}</b> <br></br> {list.description2} </td>
                  <td>
                    {this.state.types[type].functions[list.places[1][0] - 1] + " "}
                    {this.state.types[type].functions[list.places[1][1] - 1]}
                    <br></br>
                    {this.state.types[type].functions[list.places[1][2] - 1] + " "}
                    {this.state.types[type].functions[list.places[1][3] - 1]}
                  </td>
                </tr>
            )
          })
        }
        </tbody>
        </Table>
      )
    }

    this.getInitialState = () => {
      return {
        selectedOption: 0
      }
    }
    
    this.handleOptionChange = (changeEvent) => {
      this.setState({
        selectedType: changeEvent.target.value,
        dichotomiesTable: this.showTypeDichotomies(changeEvent.target.value),
        functionsTable: this.showTypeFunctions(changeEvent.target.value)
      });
      console.log(changeEvent.target.value);
    }

  }

  render () {
    return (
      <div className="container">
        <div class="row">
          <div class="col-md-2">
            <Form>
              <FormGroup>
                <Label for="Checkbox">Types</Label>
                <div>
                {
                  this.state.types.map((list, index) =>
                  {
                    return (
                      <CustomInput type="radio" id={index} value={index} label={list.type} checked={this.state.selectedType == index} onChange={this.handleOptionChange} />
                    )
                  })
                }
                </div>
              </FormGroup>
            </Form>
          </div>
          <div class="col-md-8">
            {this.state.functionsTable}
            {this.state.dichotomiesTable}
          </div>
        </div>    
      </div>
    );
  }
}

export default Data;
