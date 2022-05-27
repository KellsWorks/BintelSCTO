import { BookOpenIcon, DocumentTextIcon, ScaleIcon, ViewBoardsIcon } from '@heroicons/react/solid'

export default function Packages() {
  return (
    <div className='sm:max-w-7xl w-full items-center flex flex-col justify-center sm:mx-auto px-4 sm:px-6 border-t pt-4 shadow pb-5 mb-6'>
        <img className='w-auto h-20' src="https://www.surveycto.com/wp-content/uploads/2018/04/SurveyCTO-Logo-CMYK.png" alt="survey-cto-icon" />
        <h4 className='text-center text-2xl'>Check out our SurveyCTO Training Packages</h4>
        <p className='text-md text-center mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta beatae omnis, eum ex consectetur temporibus consequatur dolorem voluptatibus quis neque quod, ducimus perspiciatis voluptate optio delectus harum laudantium esse sunt.</p>


        <div className="mt-3">
            <div className="sm:flex sm:flex-row flex-col w-full sm:space-x-10 md:space-y-0 lg:space-y-0 space-y-10 items-center justify-center mb-10">
                <div className="sm:w-1/4 w-full items-center flex flex-col p-10 border border-sky-700 rounded-lg hover:bg-sky-700 hover:text-white hover:shadow-md">
                    <BookOpenIcon className='w-20 h-20 text-sky-700 hover:text-white transition duration-150'/>
                    <a href='https://binteltest2022.surveycto.com/collect/module1_project_intro?caseid=' className='text-md font-medium'>Project Overview</a>
                </div>
                <div className="sm:w-1/4 w-full items-center flex flex-col p-10 border border-sky-700 rounded-lg hover:bg-sky-700 hover:text-white hover:shadow-md">
                    <ViewBoardsIcon className='w-20 h-20 text-sky-700 hover:text-white transition duration-150'/>
                    <a href='https://binteltest2022.surveycto.com/collect/module_2_research_ethics?caseid=' className='text-md font-medium'>Researh Ethics</a>
                </div>
                <div className="sm:w-1/4 w-full items-center flex flex-col p-10 border border-sky-700 rounded-lg hover:bg-sky-700 hover:text-white hover:shadow-md">
                    <ScaleIcon className='w-20 h-20 text-sky-700 hover:text-white transition duration-150'/>
                    <a href='https://binteltest2022.surveycto.com/collect/data_quality?caseid=' className='text-md font-medium'>Data Quality</a>
                </div>
                <div className="sm:w-1/4 w-full items-center flex flex-col p-10 border border-sky-700 rounded-lg hover:bg-sky-700 hover:text-white hover:shadow-md">
                    <DocumentTextIcon className='w-20 h-20 text-sky-700 hover:text-white transition duration-150'/>
                    <a href='https://binteltest2022.surveycto.com/collect/research_ethics?caseid=' className='text-md font-medium'>Data Collection</a>
                </div>

            </div>
        </div>
    </div>
  )
}
