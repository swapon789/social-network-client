import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import PostCard from '../../PostCard/PostCard';


const Midleside = () => {
	const [posts, setposts] = useState([]);

	useEffect(() => {
		fetch('https://facebook-sites-server.vercel.app/postfield')
			.then(res => res.json())
			.then(data => setposts(data))
	}, []);


	const { register, formState: { errors }, handleSubmit } = useForm();
	const imagehostkey = process.env.REACT_APP_imgbb_key;
	console.log(imagehostkey)

	const handleAddPost = data => {
		const image = data.image[0];
		const formData = new FormData();
		formData.append('image', image);

		const url = `https://api.imgbb.com/1/upload?key=${imagehostkey}`

		fetch(url, {
			method: 'POST',
			body: formData
		})
			.then(res => res.json())
			.then(imgData => {
				if (imgData.success) {
					const posts = {
						description: data.description,
						image: imgData.data.url,
					}
					fetch('https://facebook-sites-server.vercel.app/postfield', {
						method: 'POST',
						headers: {
							'content-type': 'application/json',
						},
						body: JSON.stringify(posts)
					})
						.then(res => res.json())
						.then(result => {
							toast.success('Post Addes successfully')
						})
				}
			})
	}

	const { user } = useContext(AuthContext);
	return (
		<div className='text-black'>
			<div data-theme="synthwave" className="rounded-md  my-7  shadow-md sm:w-full dark:bg-gray-900 dark:text-gray-100">
				<div className="flex items-center justify-between p-2 pt-3">
					<div className="flex items-center space-x-2">
						<img src={user?.photoURL} alt="" className="object-cover object-center w-12 h-12 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
					</div>
				</div>
				<form onSubmit={handleSubmit(handleAddPost)}>
					<textarea type="text" {...register("description", { required: "description is required" })} className="textarea text-black flex items-center mx-auto bg-gray-300 placeholder:text-black w-96" placeholder="Whats On your Mind"></textarea>
					{errors.description && <p className='text-orange-400'>{errors.description?.message}</p>}

					<label for="dropzone-file" class="flex mb-2 items-center w-96  px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
						<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
						</svg>

						<h2 class="mx-3 text-gray-400">Photo</h2>

						<input type="file" {...register("image", { required: "image is required" })} id="dropzone-file" class="hidden" />
						{errors.image && <p className='text-orange-400'>{errors.image?.message}</p>}
					</label>
					<button className='w-52 mx-32 btn bg-gray-500  mb-2'>Post</button>
				</form>
				<div className='flex items-center justify-evenly'>
					<div className='flex gap-1 pb-3'>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-red-400">
							<path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
						</svg>
						<h2 className='font-bold'>Live Video</h2>

					</div>
					<div className='flex gap-1 pb-3'>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-green-600">
							<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
						</svg>

						<h2 className='font-bold'>Photo/Video</h2>

					</div>
					<div className='flex gap-1 pb-3'>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-red-500">
							<path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
						</svg>

						<h2 className='font-bold'>Felling/Activity</h2>

					</div>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-1  p-10'>
				{
					posts.map(post => <PostCard key={post._id} post={post}></PostCard>)
				}
			</div>
		</div>
	);
};

export default Midleside;