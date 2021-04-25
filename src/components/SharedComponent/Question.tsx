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

    render() {
        const { question, questionUser } = this.props;

        return (
            <div className={`w-full my-6 lg:mt-0 px-4 py-2 border-none rounded-md shadow`} style={{ minWidth:'fit-content' }}>
                <div className="w-full bg-gray-200 border border-gray-300 -mt-4 px-4 py-2 shadow-md">
                    <p>{questionUser.name} Asks</p>
                </div>
                <div className="w-full my-2 flex flex-row">
                    <div className="lg:w-1/2 flex justify-center items-center border-r">
                        <img src={questionUser.avatarURL} alt="User Avatar" className="lg:w-24 lg:h-24 "/>
                    </div>  
                    <div className="mx-8 w-2/3 text-left">
                        <h1 className="w-full  my-2 text-md lg:text-xl font-mono"> Would You Rather</h1>
                        <p className="my-2 text-sm text-gray-400">...{question.optionOne.text}...</p>
                        <Link to={`/view/${question.id}`} className="w-full block text-center my-2 border border-gray-400 
                        rounded transition duration-100 text-gray-400 py-2 hover:bg-gray-400 hover:text-white">View Poll</Link>
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