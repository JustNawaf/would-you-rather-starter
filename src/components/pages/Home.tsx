import { Component } from 'react'
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
    state = {
        show:'unans',
    };

    render() {
        const { ansquestions, unAnsquestions, myQuestions } = this.props;
        const { show } = this.state;

        return (
            <div>
                <div className="w-full h-full">
                    {/* <div className="w-full  rounded-md text-center px-4 py-2 mb-6">
                        <h1 className="mb-6">My Questions</h1>
                        <div className="w-full h-full bg-cst1-3 rounded-md shadow-inner py-4">
                            <div className="w-full flex flex-row px-4 justify-items-start overflow-x-auto">
                                {
                                    myQuestions.map((id) => (
                                        <Question key={id} id={id} />
                                    ))
                                }
                            </div>
                        </div>
                    </div> */}
                    <div className="w-full flex justify-center">
                            <div className="w-full px-2 lg:px-0 lg:w-2/4">
                                <div className="relative flex justify-evenly py-2 bg-gray-200 border-none rounded-t-md shadow z-10">
                                    <button onClick={() => this.setState({show:'ans'})} className={`${show === 'ans' ? 'bg-gray-400':'bg-gray-300'} px-4 py-2 border-none rounded-md text-white focus:outline-none`}>
                                        Show Answerd
                                    </button>
                                    <button onClick={() => this.setState({show:'unans'})} className={`${show === 'unans' ? 'bg-gray-400':'bg-gray-300'} px-4 py-2 border-none rounded-md text-white focus:outline-none`}>
                                        Show UnAnswerd
                                    </button>
                                </div>
                                <div className="w-full h-5/6 bg-gray-100 pt-6 pb-1 overflow-y-auto">
                                    {
                                        show === 'ans' && 
                                        <div className="w-full h-full flex flex-col justify-start items-center text-center px-2">
                                            {
                                                ansquestions.map((id) => (
                                                    <Question key={id} id={id} />
                                                ))
                                            }
                                            {
                                                ansquestions.length === 0 && 
                                                <div className="w-full h-full text-center">
                                                    <p>No Questions</p>
                                                </div>
                                            }
                                        </div>
                                    }
                                    {
                                        show === 'unans' &&
                                        <div className="w-full h-full flex flex-col justify-start items-center text-center px-2">
                                            {
                                                unAnsquestions.map((id) => (
                                                    <Question key={id} id={id} />
                                                ))
                                            }
                                            {
                                                unAnsquestions.length === 0 && 
                                                <div className="w-full h-full text-center">
                                                    <p>No Questions</p>
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>
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
        myQuestions:Object.keys(questions).filter((q) => questions[q].author === auth.id)

    };
}

export default connect(mapStateToProps)(Home);