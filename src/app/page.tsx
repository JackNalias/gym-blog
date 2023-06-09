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
      link: "/blogs/bodybuilding/training-biceps-for-hypertrophy",
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
      link: "/blogs/bodybuilding/unlocking-tricep-hypertrophy",
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
      link: "/blogs/bodybuilding/ultimate-guide-for-chest-hypertrophy-training",
      date: "2023-05-16",
      excerpt: `Welcome to the ultimate guide on training your chest for hypertrophy!
      Building a strong and well-defined chest is a goal shared by many
      fitness enthusiasts. In this comprehensive blog, we will delve into
      effective strategies and techniques to maximize muscle growth in your
      pectoral region. Whether you're a beginner or an experienced
      lifter, these tips will help you optimize your chest training routine.
      Let's get started!`,
    },
    {
      title: "The Ultimate Guide to Back Hypertrophy Training",
      link: "/blogs/bodybuilding/ultimate-guide-for-back-hypertrophy-training",
      date: "2023-05-22",
      excerpt: `A well-developed back not only enhances your overall physique but also
      plays a crucial role in improving posture, strength, and overall
      athletic performance. If you're looking to build an impressive and
      powerful back, this comprehensive guide is tailored just for you. In
      this article, we will delve into effective training strategies and
      provide practical tips to maximize hypertrophy in your back muscles.`,
    },
    {
      title: "The Ultimate Guide to Shoulder Hypertrophy Training",
      link: "/blogs/bodybuilding/ultimate-guide-for-shoulder-hypertrophy-training",
      date: "2023-05-22",
      excerpt: `When it comes to building an impressive physique, well-developed
      shoulders can make all the difference. Not only do they create a
      powerful V-taper, but strong and sculpted delts also enhance overall
      upper body strength and stability. Whether you're a bodybuilder,
      athlete, or fitness enthusiast, optimizing your shoulder training for
      hypertrophy is crucial. In this comprehensive guide, we will delve into
      effective exercises, training principles, and essential tips to help you
      achieve awe-inspiring shoulder gains. Get ready to take your shoulder
      workouts to the next level!`,
    },
    {
      title:
        "Quad Hypertrophy: The Ultimate Guide to Training for Massive Legs",
      link: "/blogs/bodybuilding/training-quads-for-hypertrophy",
      date: "2023-05-27",
      excerpt: `When it comes to building an impressive set of legs, few muscles are as
      crucial as the quadriceps. The quads are responsible for knee extension
      and play a significant role in lower body strength and stability. If
      your goal is to achieve hypertrophy (muscle growth) in your quads,
      you'll need a well-designed training program that targets these muscles
      effectively. In this comprehensive guide, we'll explore the key
      principles and exercises that can help you maximize quad development.
      Get ready to take your leg gains to the next level!`,
    },
    {
      title:
        "Unleashing the Power of Intensity in Bodybuilding: The Key to Maximum Gains",
      link: "/blogs/bodybuilding/bodybuilding-with-intensity",
      date: "2023-05-27",
      excerpt: `In the realm of bodybuilding, intensity reigns supreme. It is the
      driving force that separates the ordinary from the extraordinary,
      enabling individuals to sculpt their dream physiques. In this blog, we
      will explore the concept of intensity in bodybuilding, understanding its
      meaning, significance, and the transformative impact it can have on
      one's training journey. From the physiological aspects to the mental
      fortitude required, we will delve into why intensity is paramount in
      bodybuilding and what it truly means to train with intensity.`,
    },
  ];

  return (
    <main className="container mx-auto pt-20 mb-20 ps-5 pb-5 pe-5">
      <h1 className="text-5xl mb-11">
        Gym Thinker: Everything you need to know about the gym in 2023
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
