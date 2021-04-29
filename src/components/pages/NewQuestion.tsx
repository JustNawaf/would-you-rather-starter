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
        errors:{
            optionOne:null,
            optionTwo:null
        }
    };

    onChangeState = (e:any) => {
        this.setState({
            [e.target.name]:e.target.value,
            errors:{
                [e.target.dataset.error]:e.target.value === ''
            }
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

    getClassErrorOptionOne = () => {
        if(this.state.errors['optionOne'] === null){
            return ''
        }else{
            return this.state.errors.optionOne ? 'border-red-400' :'border-green-400'
        }
    };

    getClassErrorOptionTwo = () => {
        if(this.state.errors['optionTwo'] === null){
            return ''
        }else{
            return this.state.errors.optionTwo ? 'border-red-400' :'border-green-400'
        }
    };

    render() {
        return (
            <div className="w-full px-1 lg:px-0 flex justify-center items-center text-2xl">
                <div className="w-full lg:w-2/3 border-none  rounded-md shadow">
                    <h2 className="mb-6 bg-cst-3 text-white text-center py-2 rounded-t-md">Would You Rather.</h2>
                    <div className="w-full p-4">
                        <p className="text-sm mb-6">Please Fill The Followings Options Of Questions</p>
                        <label>
                            <span className="text-sm">Option One</span>
                            <input type="text" 
                                className={`w-full bg-gray-200 px-2 py-1 rounded focus:outline-none border ${this.getClassErrorOptionOne()}`}
                                name="optionOneText"
                                data-error="optionOne" 
                                onChange={this.onChangeState}/>
                        </label>
                            {
                                this.state.errors.optionOne && 
                                <span className="ml-4 text-xs text-red-400">
                                    <i>Please Fill Option One</i>
                                </span>
                            }
                        <div className="w-full my-4 flex flex-row justify-center items-center">
                            <div className="w-full h-2 border-b border-gray-200"></div>
                            <span className="mx-1 text-gray-400">Or</span>
                            <div className="w-full h-2 border-b border-gray-200"></div>
                        </div>
                        <label>
                            <span className="text-sm">Option Two</span>
                            <input type="text" 
                                className={`w-full bg-gray-200 px-2 py-1 rounded focus:outline-none border ${this.getClassErrorOptionTwo()}`}
                                name="optionTwoText"
                                data-error="optionTwo" 
                                onChange={this.onChangeState}/>
                        </label>
                            {
                                this.state.errors.optionTwo && 
                                <span className="ml-4 text-xs text-red-400">
                                    <i>Please Fill Option Two</i>
                                </span>
                            }
                        <button className="w-full bg-gray-600 mt-6 py-2 text-white border-none 
                        rounded transition duration-150 hover:bg-gray-700 focus:outline-none" onClick={this.createQuestion} >Create</button>
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