import { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserInterface } from '../../actions/Auth'
import { QuestionInterface } from '../../actions/Questions';
import { StoreInterface } from '../../store'

interface QuestionState{
    dispatch:Function,
    question:QuestionInterface,
    questionUser:UserInterface
}


class Question extends Component<QuestionState> {

    get questionText(){
        const { question } = this.props;
        return question.optionOne.text.substr(0,17);
    };

    render() {
        const { question, questionUser } = this.props;

        return (
            <div className="w-full h-full shadow bg-white rounded-md m-2" style={{ minWidth:'fit-content' }}>
                <div className="w-full grid grid-cols-5">
                    <div className="bg-cst-3 text-white col-span-2 rounded-l-md px-4 py-2">
                        <div className="w-full h-full shadow-lg flex flex-col justify-center items-center">
                            <div className="grid grid-row-2">
                                <div className="w-full h-full flex flex-col justify-between">
                                    <img className="w-24 h-24 row-span-1" src={questionUser.avatarURL} alt="User Avatar"/>
                                    <h3 className="row-span-1">{questionUser.name}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 px-4 bg-gray-50 rounded-r-md">
                        <div className="w-full h-full flex flex-col justify-between">
                            <p className="text-lg">Would You Rather</p>
                            <p className="my-2 text-sm text-gray-400 ">...{this.questionText}...</p>
                            <Link to={`/questions/${question.id}`} className="w-full block text-center my-2 border border-cst1-1 
                                rounded transition duration-100 text-cst1-1 py-2 hover:bg-cst1-1  hover:text-white">View Poll</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(store:StoreInterface,props:any){
    const { questions, users } = store;
    const question = questions[props.id];
    const questionUser = users[question.author];
    return {
        question,
        questionUser
    };
}

export default connect(mapStateToProps)(Question);