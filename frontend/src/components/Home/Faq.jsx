import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function FAQ() {
  return (
    <div className=" w-full px-4 bg-gradient-to-b ">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-6">Frequently Asked Questions</h2>
      <div className="mx-auto w-full max-w-3xl divide-y divide-gray-300 rounded-xl shadow-lg bg-white">
        
        {/* First Question */}
        <Disclosure as="div" className="p-6">
          <Disclosure.Button className="flex w-full items-center justify-between text-left">
            <span className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors">
            How does the system work?

            </span>
            <ChevronDownIcon className="h-5 w-5 text-blue-600 transform transition-transform duration-200" />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 text-sm text-gray-600 leading-relaxed">
          Simply input your symptoms and get personalized medicine recommendations.
          </Disclosure.Panel>
        </Disclosure>

        {/* Second Question */}
        <Disclosure as="div" className="p-6">
          <Disclosure.Button className="flex w-full items-center justify-between text-left">
            <span className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors">
            Is my data secure?

            </span>
            <ChevronDownIcon className="h-5 w-5 text-blue-600 transform transition-transform duration-200" />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 text-sm text-gray-600 leading-relaxed">
          Yes, we use encrypted channels to ensure the privacy of your data.


          </Disclosure.Panel>
        </Disclosure>

        {/* Third Question */}
        <Disclosure as="div" className="p-6">
          <Disclosure.Button className="flex w-full items-center justify-between text-left">
            <span className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors">
            Can I consult healthcare professionals?
            </span>
            <ChevronDownIcon className="h-5 w-5 text-blue-600 transform transition-transform duration-200" />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 text-sm text-gray-600 leading-relaxed">
          We provide expert analysis and recommendations based on your symptoms.


          </Disclosure.Panel>
        </Disclosure>

      
      </div>
    </div>
  );
}
