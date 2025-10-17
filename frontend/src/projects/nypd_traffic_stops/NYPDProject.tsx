import { ChevronDownIcon, Database, MoveRight } from "lucide-react";
import { Accordion } from "radix-ui";
import type { FC } from "react";
import ClassificationMetrics from "../../components/ClassificationMetrics";

const nypdSkills = [
  { skill: "Data Analysis & Dashboard Development" },
  { skill: "Machine Learning Predictive Modeling" },
  { skill: "A/B Testing" },
  { skill: "UX/UI Design" },
  { skill: "Project Management" },
];

const nypdTools = [
  { tool: "Power BI" },
  { tool: "DBeaver & PostgreSQL" },
  { tool: "Python" },
  { tool: "Excel" },
];

const NYPDProject: FC = () => {
  return (
    <div className='flex flex-col mb-10 ms-6'>
      <div className='flex flex-row flex-wrap'>
        <span className='flex items-center justify-center w-6 h-6 pt-2 mr-2 text-rfg '>
          <Database />
        </span>
        <h1 className='flex items-center mb-1 text-2xl font-semibold text-rfg'>
          NYPD Traffic Stop Analysis
        </h1>
      </div>

      <h3 className='block mb-2 text-lg font-normal leading-none text-rfg/80'>
        Personal Project
      </h3>
      <time className='block mb-2 text-md font-normal leading-none text-rfg/50'>
        September 2025 - October 2025
      </time>
      <h2 className='block my-2 text-xl font-semibold leading-none text-rfg/80'>
        Project Overview
      </h2>
      <p className='mb-1 text-base font-normal text-rfg/80 gap-1'>
        This analysis uses the NYPD Open Data Set for their traffic stops
        between the dates of January 1, 2023 to June 30, 2025. It involved
        creating an in-depth exploratory dashboard for the data, together with
        making Machine Learning-backed predictions to test the predictability of
        a traffic stop resulting in an arrest.{" "}
        <a
          className='underline hover:text-rfg/60'
          href='https://github.com/Samuelp0110/NYPD_Traffic_Stop_Analysis_2025'
          target='_blank'
        >
          You can find the code for this project on my GitHub
        </a>
      </p>
      <h3 className='block my-2 text-md font-semibold leading-none text-rfg/80'>
        Business Value
      </h3>
      <p className='mb-1 text-base font-normal text-rfg/80 gap-1'>
        The goal of this analysis was to transform statistical outcomes into
        actionable insights that could inform public policy decisions and
        improve law enforcement training practices.
      </p>
      <h3 className='block my-2 text-md font-semibold leading-none text-rfg/80'>
        Key Skills Developed & Used
      </h3>
      <div className='flex flex-wrap'>
        {nypdSkills.map(({ skill }) => (
          <div className='flex px-3 bg-rtertiary  my-1 mr-2 rounded-full shadow-[0_0px_2px] shadow-rtertiary transition-transform duration-150 hover:scale-[1.05] cursor-default'>
            <a className='text-rbg text-sm'>{skill}</a>
          </div>
        ))}
      </div>
      <h3 className='block my-2 text-md font-semibold leading-none text-rfg/80'>
        Technologies in the Project
      </h3>
      <div className='flex flex-wrap '>
        {nypdTools.map(({ tool }) => (
          <div className='flex px-3 bg-rtertiary  my-1 mr-2 rounded-full shadow-[0_0px_2px] shadow-rtertiary transition-transform duration-150 hover:scale-[1.05] cursor-default'>
            <a className='text-rbg text-sm'>{tool}</a>
          </div>
        ))}
      </div>
      <h2 className='block my-2 text-xl font-semibold leading-none text-rfg/80'>
        Introduction & Sources
      </h2>
      <p className='mb-2 text-base font-normal text-rfg/60 gap-1'>
        This project started with the question,{" "}
        <span className='font-bold'>
          "What is one thing that every single person has experienced or at
          least knows about?"
        </span>{" "}
        Obviously, the first thing that came to mind was traffic stops. (Haha,
        funny, right?). But seriously, it is one of the most common experiences
        of the modern day. Reckless driving, drunk driving, tired driving, even
        just normal safe driving, can result in being pulled over. As I thought
        about it more, I wondered, are these stops predictable?
      </p>
      <p className='mb-2 text-base font-normal text-rfg/60 gap-1'>
        Despite never been pulled over, I felt driven to do some research. My
        first task was to choose a location to analyze. After all, the data can
        be vastly different depending on the region. Being from New York and
        currently living just across the Hudson, I thought New York City would
        be the best option. Luckily, almost all data related to NYC operations
        is available online on the{" "}
        <a
          href='https://opendata.cityofnewyork.us/'
          className='font-semibold text-rprimary hover:text-rprimary/50 duration-200 transition-colors underline'
          target='_blank'
        >
          NYC Open Data
        </a>{" "}
        website. The specific dataset I used is titled{" "}
        <a
          href='https://data.cityofnewyork.us/Public-Safety/NYPD-Vehicle-Stop-Reports/hn9i-dwpr/about_data'
          className='font-semibold text-rprimary hover:text-rprimary/50 duration-200 transition-colors underline'
          target='_blank'
        >
          NYPD Vehicle Stop Reports
        </a>{" "}
        and contains 19 distinct features defining traffic stops in the city.
        While this was good, one feature of the data includes the command code
        of the officer conducting the stop (a code designating which precinct
        the officer belongs to) which on its own was rather uninformative, so I
        included another{" "}
        <a
          href='https://www.nyc.gov/site/nypd/bureaus/patrol/precincts-landing.page'
          className='font-semibold text-rprimary hover:text-rprimary/50 duration-200 transition-colors underline'
          target='_blank'
        >
          set of data covering precinct information
        </a>
        . After getting all the data ready, it was time to start.
      </p>
      <h2 className='block my-2 text-xl font-semibold leading-none text-rfg/80'>
        Data Visualizations & Analysis
      </h2>
      <p className='mb-2 text-base font-normal text-rfg/60 gap-1'>
        When I started planning the dashboard to visualize the data, I crafted a
        story I wanted to tell. The story starts with the facts surrounding a
        traffic stop -the context- such as a
        <span className='font-bold'>
          driver's sex, age, race, vehicle type, stop date/time, precinct area
          and whether it was a checkpoint stop or not
        </span>
        . As this information is all determined before the first interaction
        between an officer and driver, it seemed right to separate it from the
        rest. The second part of the story is the outcome, including various
        things such as{" "}
        <span className='font-bold'>
          was force used, was the vehicle searched or seized and more
        </span>
        . My real curiosity was did the first part have any predictable outcome
        on the second part.
      </p>

      <p className='mb-2 text-base font-normal text-rfg/60 gap-1'>
        I then designed the dashboard with a few key parts in mind. First, it
        had to have three pages, one for general info, one for context based
        data and one for outcome based data. Secondly, every page had have the
        ability to sort by city borough, precinct and date range. By doing this,
        every page's visuals could be narrowed down to a specific time and
        place. Rather than detailing each chart here, the interactive dashboard
        below allows viewers to explore the data and derive insights firsthand.
      </p>
      <h3 className='block my-2 text-lg font-semibold leading-none text-rfg/80'>
        Some basic information before you start is:
      </h3>
      <ol>
        <li className='flex gap-1 pb-1 text-rfg/60'>
          <span className='text-rprimary pt-1'>
            <MoveRight size={16} />
          </span>
          <a>
            Every page has <span className='font-bold'>KPIs</span> at the top
          </a>
        </li>
        <li className='flex gap-1 pb-1 text-rfg/60'>
          <span className='text-rprimary pt-1'>
            <MoveRight size={16} />
          </span>
          <a>
            Filters are page-specific, so selecting the 'Bronx' on the home page
            will not filter the other pages (you can still filter separately on
            them)
          </a>
        </li>
        <li className='flex gap-1 pb-1 text-rfg/60'>
          <span className='text-rprimary pt-1'>
            <MoveRight size={16} />
          </span>
          <a>
            You can reset all filters to the most recent year of the data with
            the 'Reset Filter' button below the filters
          </a>
        </li>
      </ol>

      <div className='max-w-[1000px] flex flex-col items-center justify-center'>
        {/* Desktop View (lg and up) */}
        <div className='hidden lg:flex '>
          <iframe
            className='rounded-xl overflow-hidden shadow-[0_2px_10px] shadow-rprimary/80'
            title='NYPD Traffic Stop Analysis 2025'
            width='920'
            height='578'
            src='https://app.powerbi.com/view?r=eyJrIjoiNjNlN2RkZTctYjdiNS00NTU5LTkwZDEtYjQ1YjhjMWJkYzE1IiwidCI6IjVmZWUyZTA2LWQ1OWMtNDA4Ny05MmE0LTY1YTFlMmE2NzIxYiIsImMiOjJ9'
          />
        </div>

        {/* Mobile/Tablet View (below lg) */}
        <div className='block lg:hidden text-center text-rprimary font-semibold text-lg p-6'>
          Please visit on a desktop browser to view the dashboard.
        </div>
      </div>
      <h2 className='block my-2 text-xl font-semibold leading-none text-rfg/80 mt-6'>
        Insights & Interpretation
      </h2>
      <p className='mb-2 text-base font-normal text-rfg/60 gap-1'>
        I had a fair few insights and ideas after looking at the visualizations,
        an here are my five most relevant thoughts:
      </p>
      <ol>
        <li className='flex gap-1 pb-1 text-rfg/60'>
          <span className='text-rprimary pt-1'>
            <MoveRight size={16} />
          </span>
          <a>
            There is an overall arrest rate 3x higher for hispanics and black
            people than any other race, indicating either bias or some other
            factor influencing decisions
          </a>
        </li>
        <li className='flex gap-1 pb-1 text-rfg/60'>
          <span className='text-rprimary pt-1'>
            <MoveRight size={16} />
          </span>
          <a>
            There is a rather common spike in traffic stops every week between
            Tuesday and Thursday. At first glance this is possibly due to the
            still new-ish implementation of hybrid (semi-remote) work
            scheduling, which means that more cars are on the roads on these
            days
          </a>
        </li>
        <li className='flex gap-1 pb-1 text-rfg/60'>
          <span className='text-rprimary pt-1'>
            <MoveRight size={16} />
          </span>
          <a>
            While Two-Wheel vehicles are stopped far less frequenctly than cars,
            they are seized at a far higher rate, indicating some sort of bias
            towards the riders of those vehicles
          </a>
        </li>
        <li className='flex gap-1 pb-1 text-rfg/60'>
          <span className='text-rprimary pt-1'>
            <MoveRight size={16} />
          </span>
          <a>
            Males are stopped far more often (5x) than females or other
            identifying genders at traffic stops
          </a>
        </li>
        <li className='flex gap-1 pb-1 text-rfg/60'>
          <span className='text-rprimary pt-1'>
            <MoveRight size={16} />
          </span>
          <a>
            Both stops and arrests seem to be peak around 7 P.M. daily on
            average
          </a>
        </li>
      </ol>
      <h2 className='block my-2 text-xl font-semibold leading-none text-rfg/80 mt-6'>
        Machine Learning Models
      </h2>
      <p className='mb-2 text-base font-normal text-rfg/60 gap-1'>
        After exploring the data, it was time to do some predictions. Now, as a
        disclaimer, going into this I firmly believed there would be no
        possibility of predicting if an arrest would be made or not by
        contextual information alone, and had little confidence that including
        other outcome variables would make a difference. Nevertheless, I wanted
        to try, because even a failure to predict holds valuable insights.
      </p>
      <p className='mb-2 text-base font-normal text-rfg/60 gap-1'>
        I used three different models in two separate pipelines for an A/B
        testing style environment to see if these predictions were possible. I
        will explain the models below as non-technically as possible, just
        before their results, to provide a basic understanding.
      </p>
      <Accordion.Root
        type='single'
        collapsible
        className='flex flex-col divide-y divide-rtertiary rounded-2xl bg-rsecondary/60 shadow-[0_2px_8px] shadow-rtertiary w-full max-w-[900px] mx-auto mt-2'
      >
        <Accordion.Item
          value='lr'
          className='group'
        >
          <Accordion.Trigger className='w-full flex items-center justify-between px-5 py-4 rounded-b rounded-2xl text-left text-lg font-semibold text-rfg transition-colors hover:bg-rprimary/10 focus:outline-none'>
            Logistic Regression
            <ChevronDownIcon
              className='ml-2 h-5 w-5 shrink-0 text-rfg transition-transform duration-300 group-data-[state=open]:rotate-180'
              aria-hidden
            />
          </Accordion.Trigger>
          <Accordion.Content className='overflow-hidden px-5 pb-6 pt-2 text-base text-rfg/80 animate-slideDown data-[state=closed]:animate-slideUp'>
            <div>
              <p className='mb-2 text-base font-normal text-rfg/60 gap-1'>
                Logistic regression is a straightforward method used to predict
                one of two possible outcomes, such as whether an arrest was made
                or not. It looks at the relationship between different pieces of
                information, like age or time of day, and how they might
                influence the outcome. The model gives each factor a certain
                amount of importance, then combines them to make a final
                prediction. Instead of giving just a “yes” or “no,” it actually
                estimates the likelihood of each result. Because it’s simple and
                easy to understand, it’s often the first model people use when
                testing to see if predictions are possible.
              </p>
              <h2 className='block my-2 text-lg font-semibold leading-none text-rfg/80 mt-6'>
                Logistic Regression Results
              </h2>
              <p className='mb-4 text-base font-normal text-rfg/60'>
                To test how well simple logistic regression could predict
                arrests, I built two versions of the model. One only used
                context-based data available during a stop (such as location,
                time, and demographics). The other also included outcome-related
                data, such as whether a search was conducted or consent was
                given.
              </p>

              <div className='flex flex-wrap justify-center gap-10 mb-10'>
                <div className='flex flex-col bg-rprimary/80 px-4 py-2 mx-auto max-w-[350px] text-center rounded-xl shadow'>
                  <div>
                    <h3 className='block my-2 text-lg font-semibold leading-none text-rbg/80'>
                      Contextual Model
                    </h3>
                    <p className='text-base font-normal text-rbg/60'>
                      When relying only on context available before or during a
                      stop—such as location, time, and driver demographics—the
                      model showed that these factors alone offer limited power
                      for anticipating arrest outcomes. From a business and
                      policy standpoint, this means external circumstances may
                      help describe where and when incidents occur, but not why
                      they escalate. Context provides situational awareness, not
                      behavioral prediction—indicating a need for more granular,
                      human-interaction data to inform fair enforcement policies
                      or predictive tools.
                    </p>
                  </div>

                  <div className='mt-auto self-start'>
                    <ClassificationMetrics
                      model='LR Context Model'
                      c1='No Arrest Made'
                      c2='Arrest Made'
                      c1precision='99%'
                      c2precision='7%'
                      c1recall='65%'
                      c2recall='73%'
                      c1f1score='79%'
                      c2f1score='13%'
                      c1support='394,179'
                      c2support='13,794'
                      accuracy='66%'
                      description='Based on these metrics, we can see that when predicting no arrests, it is highly accurate in not giving false positives, but it misses about 35% of the no-arrest situations. On the other side, we can see that when prediciting an arrest made, it is incredibly innacurate, with only a 7% correct rate. Combined with the 73% recall rate, we can tell that it is classifying a higher number of no-arrest situations as arrests. Based on this, we can see that the model is highly unreliable.'
                    />
                  </div>
                </div>

                <div className='flex flex-col bg-rprimary/80 px-4 py-2 mx-auto max-w-[350px] text-center rounded-xl shadow'>
                  <div>
                    <h3 className='block my-2 text-lg font-semibold leading-none text-rbg/80'>
                      Outcome Model
                    </h3>
                    <p className='text-base font-normal text-rbg/60'>
                      When outcomes such as searches or consent were added, the
                      model’s interpretive power improved substantially. From an
                      operational lens, this demonstrates that what happens
                      during the interaction carries far more weight than static
                      background details. The implication for leadership is
                      clear: interventions aimed at reducing escalation or bias
                      should focus on in-stop decision-making processes, officer
                      behavior patterns, and procedural consistency rather than
                      demographic profiling.
                    </p>
                  </div>
                  <div className='mt-auto self-start'>
                    <ClassificationMetrics
                      model='LR Outcome Model'
                      c1='No Arrest Made'
                      c2='Arrest Made'
                      c1precision='99%'
                      c2precision='11%'
                      c1recall='76%'
                      c2recall='84%'
                      c1f1score='86%'
                      c2f1score='19%'
                      c1support='394,179'
                      c2support='13,794'
                      accuracy='76%'
                      description='Compared to the context-only model, this version performs much better across nearly all metrics. When predicting no arrests, it remains extremely accurate, correctly identifying most of those cases with a strong 99% precision and 76% recall. More importantly, its ability to detect real arrests improves dramatically, it now catches 84% of actual arrests, though it is still wrong about many of them with just 11% precision. Overall accuracy rises to 76%, showing that including outcome data (like whether a search occurred or consent was given) gives the model far more useful information to base its predictions on. While it still overpredicts arrests somewhat, this model shows clear progress toward understanding the patterns behind police stops and outcomes.'
                    />
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item
          value='rf'
          className='group'
        >
          <Accordion.Trigger className='w-full flex items-center justify-between px-5 py-4 text-left text-lg font-semibold text-rfg transition-colors hover:bg-rprimary/10 focus:outline-none'>
            Random Forest
            <ChevronDownIcon
              className='ml-2 h-5 w-5 shrink-0 text-rfg transition-transform duration-300 group-data-[state=open]:rotate-180'
              aria-hidden
            />
          </Accordion.Trigger>
          <Accordion.Content className='overflow-hidden px-5 pb-6 pt-2 text-base text-rfg/80 animate-slideDown data-[state=closed]:animate-slideUp'>
            <div>
              <p className='mb-2 text-base font-normal text-rfg/60 gap-1'>
                The random forest model makes predictions by combining the
                results of many smaller decision-making tools called “trees.”
                Each tree makes its own guess based on different parts of the
                data, and then the forest takes a majority vote to decide on the
                final answer. This approach helps the model avoid being misled
                by any single detail in the dataset. Random forests are great at
                handling large, messy, or complex data, and are known for being
                both powerful and flexible. They are widely used because they
                often deliver strong results without needing too much
                fine-tuning.
              </p>

              <h2 className='block my-2 text-lg font-semibold leading-none text-rfg/80 mt-6'>
                Random Forest Results
              </h2>
              <p className='mb-4 text-base font-normal text-rfg/60'>
                As with logistic regression, I tested two versions of this
                model: one using only the basic context of a stop (such as time
                and location), and another that also included outcome-related
                information (such as whether a search occurred or consent was
                given). This let me compare how much predictive power comes from
                context alone versus what happens during the stop.
              </p>

              <div className='flex flex-wrap justify-center gap-10 mb-10'>
                <div className='flex flex-col bg-rprimary/80 px-4 py-2 mx-auto max-w-[350px] text-center rounded-xl shadow'>
                  <div>
                    <h3 className='block my-2 text-lg font-semibold leading-none text-rbg/80'>
                      Contextual Model
                    </h3>
                    <p className='text-base font-normal text-rbg/60'>
                      Using only contextual inputs, the model was able to
                      identify broad behavioral trends but lacked precision in
                      isolating meaningful arrest indicators. For analysts or
                      policymakers, this suggests that relying on demographic or
                      temporal data alone may reinforce surface-level insights
                      without addressing the root causes of arrest
                      discrepancies. The takeaway is that context explains
                      activity, not outcome, and is best used for resource
                      planning rather than predictive policing.
                    </p>
                  </div>
                  <div className='mt-auto self-start'>
                    <ClassificationMetrics
                      model='RF Context Model'
                      c1='No Arrest Made'
                      c2='Arrest Made'
                      c1precision='99%'
                      c2precision='7%'
                      c1recall='65%'
                      c2recall='76%'
                      c1f1score='78%'
                      c2f1score='13%'
                      c1support='394,179'
                      c2support='13,794'
                      accuracy='65%'
                      description='This version of the random forest model was trained using only contextual data available at the time of the stop — things like time, location, and demographics. It did well at predicting no arrests, with a precision of 99%, but missed about 35% of them overall. When it came to predicting arrests, the model caught 76% of them (a decent recall), but was right only 7% of the time when it made that prediction, showing poor precision. This suggests that while the model is willing to flag potential arrests, it gets most of them wrong. Overall accuracy lands at 65%, which reinforces that without outcome data, prediction quality is limited.'
                    />
                  </div>
                </div>

                <div className='flex flex-col bg-rprimary/80 px-4 py-2 mx-auto max-w-[350px] text-center  rounded-xl shadow'>
                  <div>
                    <h3 className='block my-2 text-lg font-semibold leading-none text-rbg/80'>
                      Outcome Model
                    </h3>
                    <p className='text-base font-normal text-rbg/60'>
                      Incorporating event-level outcomes created a far more
                      balanced and actionable model. From a strategic view, this
                      highlights that decision dynamics during the stop—such as
                      officer choices, consent requests, and searches—drive
                      measurable differences in arrest probability. These
                      insights can guide the design of targeted officer training
                      programs, standardized response protocols, and post-stop
                      evaluation frameworks to improve both efficiency and
                      fairness.
                    </p>
                  </div>
                  <div className='mt-auto self-start'>
                    <ClassificationMetrics
                      model='RF Outcome Model'
                      c1='No Arrest Made'
                      c2='Arrest Made'
                      c1precision='99%'
                      c2precision='11%'
                      c1recall='77%'
                      c2recall='83%'
                      c1f1score='86%'
                      c2f1score='19%'
                      c1support='394,179'
                      c2support='13,794'
                      accuracy='77%'
                      description='With outcome data included — such as whether a vehicle was searched or consent was given — the model showed a noticeable improvement. It maintained a high accuracy in identifying no-arrest cases while increasing its ability to find actual arrests, achieving an 83% recall on them. However, it still struggled with precision on arrest predictions, getting them right only 11% of the time. This means it was better at catching arrests, but still often wrong when it tried. Overall, this model highlights how outcome-related details significantly improve predictive power, but also how difficult it remains to accurately and confidently predict arrest events.'
                    />
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item
          value='xgb'
          className='group'
        >
          <Accordion.Trigger className='w-full flex items-center justify-between px-5 py-4 rounded-t rounded-2xl text-left text-lg font-semibold text-rfg transition-colors hover:bg-rprimary/10 focus:outline-none'>
            XGBoost
            <ChevronDownIcon
              className='ml-2 h-5 w-5 shrink-0 text-rfg transition-transform duration-300 group-data-[state=open]:rotate-180'
              aria-hidden
            />
          </Accordion.Trigger>
          <Accordion.Content className='overflow-hidden px-5 pb-6 pt-2 text-base text-rfg/80 animate-slideDown data-[state=closed]:animate-slideUp'>
            <div>
              <p className='mb-2 text-base font-normal text-rfg/60 gap-1'>
                XGBoost is a more advanced model that also uses decision trees,
                but it builds them step-by-step in a smart way. Each new tree
                learns from the mistakes made by the ones before it, making the
                overall model better over time. This approach helps the model
                focus on hard-to-predict cases and improves accuracy. XGBoost is
                also designed to be very fast and efficient, even with large
                amounts of data. It’s widely used in real-world applications
                because it offers a strong mix of speed, performance, and
                flexibility.
              </p>

              <h2 className='block my-2 text-lg font-semibold leading-none text-rfg/80 mt-6'>
                XGBoost Results
              </h2>
              <p className='mb-4 text-base font-normal text-rfg/60'>
                I applied XGBoost to the same two setups as the other models:
                one using only context available during the stop, and the other
                including outcomes like searches and consent. Because of its
                ability to learn from previous mistakes, XGBoost performed
                better overall than the other models in this analysis. The
                outcome-based version in particular showed strong gains in
                accuracy and balance across categories.
              </p>

              <div className='flex flex-wrap justify-center gap-10 mb-10'>
                <div className='flex flex-col bg-rprimary/80 px-4 py-2 mx-auto max-w-[350px] text-center rounded-xl shadow'>
                  <div>
                    <h3 className='block my-2 text-lg font-semibold leading-none text-rbg/80'>
                      Contextual Model
                    </h3>
                    <p className='text-base font-normal text-rbg/60'>
                      Even at its most advanced, a purely contextual model could
                      only approximate trends rather than explain outcomes. For
                      decision-makers, this reinforces that environmental and
                      demographic factors—while useful for understanding
                      exposure risk—cannot substitute for behavioral or
                      procedural insight. Business value here lies in
                      understanding operational pressure points (times,
                      locations, demographics) that may warrant better staffing
                      or preventive community initiatives.
                    </p>
                  </div>
                  <div className='mt-auto self-start'>
                    <ClassificationMetrics
                      model='XGBoost Context Model'
                      c1='No Arrest Made'
                      c2='Arrest Made'
                      c1precision='97%'
                      c2precision='13%'
                      c1recall='96%'
                      c2recall='19%'
                      c1f1score='96%'
                      c2f1score='15%'
                      c1support='394,179'
                      c2support='13,794'
                      accuracy='93%'
                      description='This model performed extremely well at predicting non-arrest events, showing both high precision and recall. That means when it predicted no arrest, it was usually correct, and it caught nearly all of those cases. However, when it came to predicting actual arrests, its performance dropped significantly — it only correctly identified 13% of its arrest predictions, and only caught 19% of all true arrests in the data. This shows the model is very cautious, leaning toward predicting “no arrest” even when an arrest happens. While the overall accuracy looks high, the model is weak at finding the minority class, which limits its usefulness for balanced decision-making.'
                    />
                  </div>
                </div>

                <div className='flex flex-col bg-rprimary/80 px-4 py-2 mx-auto max-w-[350px] text-center rounded-xl shadow'>
                  <div>
                    <h3 className='block my-2 text-lg font-semibold leading-none text-rbg/80'>
                      Outcome Model
                    </h3>
                    <p className='text-base font-normal text-rbg/60'>
                      When event-driven features were added, the model delivered
                      a more comprehensive and realistic view of arrest
                      dynamics. From a management perspective, this demonstrates
                      that policy impact is observable once process-level
                      variables are measured. In practice, integrating this type
                      of modeling could support internal audits, help
                      departments evaluate training effectiveness, and provide
                      evidence-based guidance for procedural reforms aimed at
                      consistency and equity.
                    </p>
                  </div>
                  <div className='mt-auto self-start'>
                    <ClassificationMetrics
                      model='XGBoost Outcome Model'
                      c1='No Arrest Made'
                      c2='Arrest Made'
                      c1precision='98%'
                      c2precision='21%'
                      c1recall='93%'
                      c2recall='56%'
                      c1f1score='96%'
                      c2f1score='31%'
                      c1support='394,179'
                      c2support='13,794'
                      accuracy='92%'
                      description='With outcome-based data included, this model improved at predicting arrests while maintaining strong performance on non-arrest predictions. It correctly identified over half of the real arrests and was twice as precise at predicting them compared to the contextual version. While 21% precision is still modest, it’s a meaningful step up from earlier models that barely recognized arrests at all. The model also stayed highly accurate when predicting non-arrests, keeping false positives low. Overall, this version shows that including outcome-related details gives the model more insight into what actually leads to an arrest.'
                    />
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      <h2 className='block my-2 text-2xl font-semibold leading-none text-rfg/80 mt-6'>
        Conclusion
      </h2>
      <p className='mb-2 text-base font-normal text-rfg/60 gap-1'>
        To bring everything together, I reflected on both the technical results
        and their broader implications. I chose these three models because they
        each offer different strengths that fit the nature of this dataset. The
        data contains a mix of simple details like age and time, as well as more
        complex, varied categories like race, sex, and location codes. Logistic
        regression is useful as a starting point to test whether any clear
        patterns exist at all. Random Forest is helpful for capturing more
        subtle or nonlinear relationships in the data while still being fairly
        easy to understand. XGBoost is a more powerful option that can uncover
        deeper patterns and usually performs very well when the goal is to make
        accurate predictions from complex or unbalanced data like this.
      </p>
      <p className='mb-2 text-base font-normal text-rfg/60 gap-1'>
        As for the results, while across the board adding outcome data improved
        results, not a single model was able to predict arrests with better than
        a 20% success rate. This confirms my initial thought that making these
        predictions based on the available data is impossible. But also, as I
        said before, this provides invaluable insight.
      </p>
      <p className='mb-2 text-base font-normal text-rfg/60 gap-1'>
        I think the best way to phrase the final conclusion is that police
        interactions are a black box. Every situation is unique and there is no
        way to predict an outcome. The officer's mindset and ideas, mixed with
        their interactions with the driver, make every situation chaotic and
        random.
      </p>
      <h3 className='block my-2 text-lg font-semibold leading-none text-rfg/80'>
        My Recommendations
      </h3>
      <p className='mb-2 text-base font-normal text-rfg/60 gap-1'>
        From this data, several actionable recommendations emerge:
      </p>
      <ol>
        <li className='flex gap-1 pb-1 text-rfg/60'>
          <span className='text-rprimary pt-1'>
            <MoveRight size={16} />
          </span>

          <a>
            <span className='font-semibold text-rfg/80'>
              Standardize training:{" "}
            </span>
            There is an overall arrest rate 3x higher for hispanics and black
            people than any other race, indicating either bias or some other
            factor influencing decisions
          </a>
        </li>
        <li className='flex gap-1 pb-1 text-rfg/60'>
          <span className='text-rprimary pt-1'>
            <MoveRight size={16} />
          </span>

          <a>
            <span className='font-semibold text-rfg/80'>
              Audit bias trends:{" "}
            </span>
            The analysis highlights racial and demographic discrepancies,
            suggesting the need for deeper bias audits and behavioral data
            reviews.
          </a>
        </li>
        <li className='flex gap-1 pb-1 text-rfg/60'>
          <span className='text-rprimary pt-1'>
            <MoveRight size={16} />
          </span>

          <a>
            <span className='font-semibold text-rfg/80'>
              Review seizure practices:{" "}
            </span>
            Elevated seizure rates for two-wheel vehicles indicate potential
            process bias that warrants procedural review and policy alignment.
          </a>
        </li>
      </ol>

      <p className='mb-2 text-base font-normal text-rfg/60 gap-1'>
        I hope you enjoyed my analysis of NYPD's Vehicle Stops of the past 2
        years or so. Feel free to contact me with any questions or comments
        about it!
      </p>
    </div>
  );
};

export default NYPDProject;
