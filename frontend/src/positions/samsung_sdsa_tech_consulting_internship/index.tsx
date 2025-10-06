import meta from "./metadata";
import PositionLayout from "../../components/positionBlocks/PositionLayout";
import SkillWeb from "./images/Who I Learned From.svg";

const SamsungPage = () => {
  return (
    <PositionLayout
      showHeader
      metadata={meta}
    >
      {/* Overview */}
      <div></div>
      {/* Gen AI Project */}
      <div></div>
      {/* Other Projects */}
      <div></div>

      {/* Skill Web Section */}
      <div className='w-full max-w-7xl flex flex-col lg:flex-row items-center gap-8 my-10 '>
        {/* Image Section */}
        <div className='w-full flex justify-center'>
          <img
            src={SkillWeb}
            alt='{imageAlt}'
            className='w-full h-auto rounded-xl object-contain'
          />
        </div>

        {/* Text Section */}
        <div className='w-full text-center lg:text-left lg:w-2/3 space-y-4 '>
          <h2 className='text-2xl sm:text-3xl font-bold text-rfg text-foreground'>
            How I Developed Myself
          </h2>

          <p className='text-lg text-rfg'>
            During my time at Samsung, one thing my mentor stressed above all
            was keeping track of my activities throughout my internship. From
            minor things such as interacting with colleagues, to how long I
            spent on each project. Shown here is the result of all of that book
            keeping. It is a skillweb demonstrating all core skills I developed
            at Samsung, what the primary source of that growth was, and what
            area of learning did they fall in. I consider this one of the most
            important take aways from my time there, as it is a visual
            representation of my growth.
          </p>
        </div>
      </div>
    </PositionLayout>
  );
};

export default SamsungPage;
