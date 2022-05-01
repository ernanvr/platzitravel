import * as React from 'react';

type Props = {
	content: string;
}

const PrimaryButton = (props: Props): JSX.Element => {
	return (
			<button className='absolute left-0 right-0 h-20 mx-auto font-semibold bg-white rounded-full w-80 text-primary top-[40rem] text-2.5xl'>
				{props.content}
			</button>
	);
};

export default PrimaryButton;
