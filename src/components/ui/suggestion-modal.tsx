import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface SuggestionModalProps {
	isOpen: boolean;
	onClose: () => void;
	suggestion: string;
	pattern?: string;
}

const SuggestionModal = ({
	isOpen,
	onClose,
	suggestion,
	pattern,
}: SuggestionModalProps) => {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-50" onClose={onClose}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					<div className="fixed inset-0 bg-black bg-opacity-25" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95">
							<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
								<div className="flex items-center justify-between mb-4">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900">
										Suggested Pattern
									</Dialog.Title>
									<button
										onClick={onClose}
										className="text-gray-400 hover:text-gray-500">
										✕
									</button>
								</div>

								{pattern && (
									<div className="mb-4 p-3 bg-gray-50 rounded-lg">
										<p className="text-sm text-gray-600">{pattern}</p>
									</div>
								)}

								<div className="mt-2">
									<p className="text-sm text-gray-500">{suggestion}</p>
								</div>

								<div className="mt-4 flex justify-end gap-3">
									<button
										type="button"
										className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
										onClick={onClose}>
										Got it
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default SuggestionModal;
