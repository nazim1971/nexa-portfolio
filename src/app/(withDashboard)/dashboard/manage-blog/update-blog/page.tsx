// 'use client'
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { useRouter } from 'next/navigation';
// import { useParams } from 'next/navigation';
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Button } from '@/components/ui/button';
// import { uploadImage } from '@/hooks/uploadImage';
// import { useGetBlogByIdQuery, useUpdateBlogMutation,  } from '@/redux/features/admin/blog/blogApi';

// // Blog Schema Validation with Zod
// const blogSchema = z.object({
//   title: z.string().min(3, 'Title is required'),
//   content: z.string().min(1, 'Content must be at least 1 character'),
//   category: z.string().min(1, 'Category is required'),
//   image: z.any().optional(),
// });

// type TBlog = z.infer<typeof blogSchema>;

// const UpdateBlog = () => {
//   const router = useRouter();
//   const { blogId } = useParams();
  
//   const { data: blog } = useGetBlogByIdQuery(blogId);
//   const [updateBlog, { isLoading }] = useUpdateBlogMutation();

//   const form = useForm<TBlog>({
//     resolver: zodResolver(blogSchema),
//     defaultValues: {
//       title: blog?.title || '',
//       content: blog?.content || '',
//       category: blog?.category || '',
//       image: null,
//     },
//   });

//   const onSubmit = async (data: TBlog) => {
//     try {
//       let imageUrl = null;
//       if (data.image) {
//         console.log("Uploading image...");
//         try {
//           imageUrl = await uploadImage(data.image);
//           console.log("Uploaded image URL:", imageUrl);
//         } catch (error) {
//           console.error("Error uploading image:", error);
//           return;
//         }
//       }

//       const updatedBlogInfo = { ...data, image: imageUrl || blog?.image };
//       await updateBlog({ id: blogId, ...updatedBlogInfo }).unwrap();
//       router.push(`/blogs/${blogId}`);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="p-4 md:p-0">
//       <h1 className="text-3xl text-center mb-6">Update Blog</h1>
//       <div className="flex justify-center h-screen w-[90%] mx-auto">
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//             <FormField control={form.control} name="title" render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Blog Title:</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter blog title" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )} />

//             <FormField control={form.control} name="content" render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Content:</FormLabel>
//                 <FormControl>
//                   <Textarea placeholder="Enter blog content" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )} />

//             <FormField control={form.control} name="category" render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Category:</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter blog category" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )} />

//             <FormField control={form.control} name="image" render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Blog Image:</FormLabel>
//                 <FormControl>
//                   <Input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files?.[0] || null)} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )} />

//             <Button className="mt-4 flex items-center gap-2" type="submit" disabled={isLoading}>
//               {isLoading ? <div className="flex items-center gap-2"><span>Updating...</span></div> : 'Update Blog'}
//             </Button>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default UpdateBlog;



const UpdateBlogPage = () => {
    return (
        <div>
            
        </div>
    );
};

export default UpdateBlogPage;