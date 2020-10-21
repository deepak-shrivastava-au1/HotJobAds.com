import React, {Component} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Form, Row, Col, Container, Button } from "react-bootstrap";

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'ResumeTitle', headerName: 'Resume Title',type: 'text', width: 130 },
  { field: 'ResumeID', headerName: 'Resume ID',type: 'number', width: 130 },
  { field: 'PostedOn', headerName: 'Posted On',type: 'date',width: 130,},
  { field: 'ViewResume',headerName: 'Full name',type: 'number',width: 130,},
  { field: 'Action',headerName: 'Action',type: 'number',width: 130,},
];

const rows = [
  { id: 1, ResumeTitle: 'Resume1', ResumeID: '12345', PostedOn: 'Oct 21,2020',ViewResume:'View Resume',Action:'Delete' },

];

export default class MyResumes extends Component{
    constructor(props){
        super(props);
        this.state = {
            resume: [],
        }
    }

    onChange = e => {
        this.setState({
            [e.target.id]:[e.target.value],
        })
   
    };
   
render(){
  return (
          <Container fluid>
            <div className = "row" style={{ height: '300px', width: '107.5%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
            </div>
          <Row className="justify-content-center">
            <Col className = "registerHeading" md={8} sm={10} xs={12}>
              <hr />
              <Form
                onSubmit=''
                encType="multipart/form-data"
              >           
                <Form.Group controlId="cv">
                  <Row className="justify-content-center">
                    <Col>
                      <Row className="justify-content-start">
                        <Col sm={12} md={3}>
                          <Form.Label className="float-center ">
                            
                          </Form.Label>
                        </Col>
                        <Col sm={12} md={6}>
                          <Form.Control
                            type="file"
                            onChange={this.onChange}
                            required
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Form.Group>
  
                <Form.Row className="justify-content-center">
                  <Col sm={6}>
                    <Button
                      variant="dark"
                      type="submit"
                      size="lg"
                      block
                      className="my-4"
                    >
                      Add New Resume
                    </Button>
                  </Col>
                </Form.Row>
              </Form>
            </Col>
          </Row>
        </Container>
  )};
}
