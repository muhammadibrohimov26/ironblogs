import { IAuthor } from '@/types'


function AuthorCard(author: IAuthor) {
	return (
		<div className='flex flex-col space-y-2 w-52 text-center'>
			<div className='w-full h-52 relative'>
		
			</div>
			<h2 className='text-2xl font-creteRound'>{author.name}</h2>
			<p className='text-muted-foreground'>
				<span className='font-bold text-white'>04</span> Published posts
			</p>
		</div>
	)
}

export default AuthorCard
