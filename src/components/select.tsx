import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export const Select = ({
	options,
	value,
	onChange,
	className,
}: {
	options: { value: string; label: string }[];
	value: string;
	onChange: (value: string) => void;
	className?: string;
}) => {
	return (
		<Listbox value={value} onChange={(e) => onChange(e)}>
			{({ open }: { open: boolean }) => (
				<div className={`w-full` + className}>
					<div className={'relative'}>
						<Listbox.Button
							className={
								`border-neutral-300
								bg-white relative w-full border-solid border
								rounded-lg pl-3 pr-10 text-left cursor-pointer outline-none
								 text-neutral-500 py-2
							` + className
							}
						>
							<span className='block truncate'>
								{options.find((op) => op.value === value)?.label ||
									options.find((op) => op.value === value)?.label ||
									''}
							</span>
							<span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
								<span className='material-icons'>expand_more</span>
							</span>
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
							leave='transition ease-in duration-100'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<Listbox.Options
								className={
									'absolute z-10 mt-1 pl-0 list-none w-full bg-white border border-solid border-neutral-200 max-h-60 rounded-md py-1 ring-1 ring-black ring-opacity-5 overflow-auto outline-none text-neutral-700'
								}
							>
								{options.map((op) => (
									<Listbox.Option
										key={op.value}
										className={`text-neutral-900 cursor-pointer select-none relative pl-3 pr-9 flex items-center truncate hover:bg-neutral-200 ease-in-out duration-700 transition`}
										value={op.value}
									>
										{op.label}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</div>
			)}
		</Listbox>
	);
};
