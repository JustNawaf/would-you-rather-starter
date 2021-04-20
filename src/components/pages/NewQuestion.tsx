import React, { Component } from 'react'
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { UserInterface } from '../../actions/Auth';
import { handleCreateQuestion } from '../../actions/Questions';
import { StoreInterface } from '../../store';

interface NewQuestionState extends RouteComponentProps {
    dispatch:Function,
    auth:UserInterface,
    history:any,
};

class NewQuestion extends Component<NewQuestionState> {

    state = {
        optionOneText:'',
        optionTwoText:'',
    };

    onChangeState = (e:any) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    createQuestion = (e:React.MouseEvent) => {
        e.preventDefault();
        const { dispatch, auth, history } = this.props;
        const question = {
            ...this.state,
            author:auth.id,
        };
        dispatch(handleCreateQuestion(auth,question));
        history.push('/');

    };

    render() {
        return (
            <div className="w-full flex justify-center items-center text-2xl">
                <div className="w-full lg:w-2/3 p-6 border-none shadow-2xl rounded-md">
                    <h2 className="mb-6">Would You Rather.</h2>
                    <div className="w-full px-4">
                        <input type="text" className="w-full bg-gray-200 px-2 py-1" name="optionOneText" onChange={this.onChangeState}/>
                        <div className="w-full my-4 flex flex-row justify-center items-center">
                            <div className="w-full h-2 border-b border-gray-200"></div>
                            <span className="mx-1 text-gray-400">Or</span>
                            <div className="w-full h-2 border-b border-gray-200"></div>
                        </div>
                        <input type="text" className="w-full bg-gray-200 px-2 py-1" name="optionTwoText" onChange={this.onChangeState}/>
                        <button className="w-full bg-green-400 mt-6 py-2 text-white border-none 
                        rounded transition duration-150 hover:bg-green-500 focus:outline-none" onClick={this.createQuestion} >Create</button>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(store:StoreInterface){
    const { auth } = store;
    return {
        auth
    }
}

export default withRouter(connect(mapStateToProps)(NewQuestion));