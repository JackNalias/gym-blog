interface Blog {
  title: string;
  link: string;
  excerpt: string;
  date: string;
}

export default function Home() {
  const blogs: Array<Blog> = [
    {
      title: "Training Biceps for Hypertrophy (Bodybuilding)",
      link: "/blogs/training-biceps-for-hypertrophy",
      date: "2023-05-11",
      excerpt: `Biceps are one of the most popular muscle groups to train in the gym, 
      and for good reason. Not only do well-developed biceps look impressive,
      they also play a key role in many upper body movements, such as pulling
      exercises like rows and chin-ups. But when it comes to training biceps
      for hypertrophy (muscle growth), there are a few key principles to keep
      in mind. In this blog, we'll go over those principles and provide some
      tips for maximizing your biceps gains.`,
    },
    {
      title: "Unlocking Tricep Hypertrophy",
      link: "/blogs/unlocking-tricep-hypertrophy",
      date: "2023-05-16",
      excerpt: `Building well-developed triceps not only enhances the aesthetics of your
      arms but also plays a crucial role in overall upper body strength and
      functionality. To achieve significant tricep hypertrophy, it is
      essential to implement a targeted training program that incorporates key
      exercises, progressive overload, proper form, and an understanding of
      muscle anatomy. In this blog, we will delve into the intricacies of
      tricep training and provide you with actionable tips to maximize muscle
      growth.`,
    },
    {
      title: "The Ultimate Guide to Chest Hypertrophy Training",
      link: "/blogs/ultimate-guide-for-chest-hypertrophy-training",
      date: "2023-05-16",
      excerpt: `Welcome to the ultimate guide on training your chest for hypertrophy!
      Building a strong and well-defined chest is a goal shared by many
      fitness enthusiasts. In this comprehensive blog, we will delve into
      effective strategies and techniques to maximize muscle growth in your
      pectoral region. Whether you're a beginner or an experienced
      lifter, these tips will help you optimize your chest training routine.
      Let's get started!`,
    },
  ];

  return (
    <main className="container mx-auto pt-20 mb-20 ps-5 pb-5 pe-5">
      <h1 className="text-5xl mb-11">
        Gym Head: Everything you need to know about the gym in 2023
      </h1>
      <div className="text-lg justify-center md:justify-normal grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16">
        {blogs.map((blog) => (
          <a
            href={blog.link}
            key={blog.title}
            className="flex flex-col border p-4 rounded-md border-neutral-700 hover:cursor-pointer "
          >
            <h2 className="font-medium text-2xl ">{blog.title}</h2>
            <span className="font-medium italic mt-2 text-right">
              {blog.date}
            </span>
            <p className="mb-3 flex-grow">{blog.excerpt}</p>
            <div className="flex justify-center">
              <div className="px-1 py-1 border border-neutral-700 w-32 text-center rounded-md align-middle content-center">
                Read More
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
