import { Contact, Experience, Todo } from '@/app/helper/types';
import Gallery from '@/app/components/Gallery';
import Link from 'next/link';

type Props = {
	contacts: Contact[]
};

export const Contacts = ({contacts} : Props) => {
	return (
		<div className='contacts flex flex-col items-center pb-20 gap-8'>
			<h2 className='text-xl'>Contacts</h2>
			<div className='grid grid-cols-2 w-full lg lg:w-1/2 gap-8'>
				{contacts?.map((contact: Contact, index: number) => {
					return (
						<Link key={index} href={contact.link} target='_blank'>
							<div
								key={index}
								className='flex items-center justify-around p-4 h-16  md:h-20 bg-base-200 rounded-lg *:h-full '
							>
								{contact.logo} {contact.name}
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
