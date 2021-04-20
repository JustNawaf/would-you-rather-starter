import React, { Component } from 'react'
import { connect } from 'react-redux';
import { UserInterface } from '../../actions/Auth';
import { StoreInterface } from '../../store';
import Question from '../SharedComponent/Question';

type HomeState = {
    auth:UserInterface,
    ansquestions:Array<string>,
    unAnsquestions:Array<string>,
    myQuestions:Array<string>,
}
  
class Home extends Component<HomeState> {
    render() {
        const { auth, ansquestions, unAnsquestions, myQuestions } = this.props;
    
        return (
            <div>
                <div className="w-full h-full">
                    <div className="w-full px-4 py-2 mb-6">
                        <h1>My Questions</h1>
                        <div className="w-full flex flex-row px-4 py-2 justify-items-start overflow-x-auto">
                            {
                                myQuestions.map((id) => (
                                    <Question key={id} id={id} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className="w-full text-center px-2 lg:px-0">
                            <h1 className="mb-8">ANS</h1>
                            {
                                ansquestions.map((id) => (
                                    <Question key={id} id={id} />
                                ))
                            }
                        </div>
                        <div className="w-full text-center px-2 lg:px-0">
                            <h1 className="mb-8">UN-ANS</h1>
                            {
                                unAnsquestions.map((id) => (
                                    <Question key={id} id={id} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(store:StoreInterface) {
    const { auth, questions } = store;

    return {
        auth,
        ansquestions:Object.keys(questions).filter((q) => Object.keys(auth.answers).includes(q)),
        unAnsquestions:Object.keys(questions).filter((q) => !Object.keys(auth.answers).includes(q)),
        myQuestions:Object.keys(questions).filter((q) => questions[q].author == auth.id)

    };
}

export default connect(mapStateToProps)(Home);