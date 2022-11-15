import questions from '../data'
import SingleQuestion from './SingleQuestion'

const Questions = () => {
  return (
    <div className='w-[90%] mx-auto p-10 bg-white rounded-sm sm:flex-row lg:grid grid-cols-3 gap-8'>
        <h1 className='text-3xl font-medium'>Questions And Answers About Login</h1>
        <div className='col-span-2'>
            {questions.map(question =>
                <SingleQuestion key={question.id} {...question} />
            )}
        </div>
    </div>
  )
}

export default Questions