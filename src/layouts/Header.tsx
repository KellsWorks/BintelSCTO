
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'



export default function Header() {
  return (
    <Popover className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 bg-sky-800 px-3 shadow-lg">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Bintel</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://bintelanalytics.mw/storage/app/uploads/public/411/748/ca4/thumb__80_0_0_0_auto.png"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-700">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">

            <a href="#" className="text-base font-medium text-gray-100 hover:text-gray-200">
              Packages
            </a>
            <a href="#" className="text-base font-medium text-gray-100 hover:text-gray-200">
              Trainings
            </a>
            <a href="#" className="text-base font-medium text-gray-100 hover:text-gray-200">
              Enrollment
            </a>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap rounded bg-white px-2 py-2 text-base font-medium text-sky-700 hover:text-gray-900">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://bintelanalytics.mw/storage/app/uploads/public/411/748/ca4/thumb__80_0_0_0_auto.png"
                    alt="icon"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-700">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
