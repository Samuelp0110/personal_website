import { Box } from "lucide-react";
import { Dialog, Popover } from "radix-ui";
import type { FC } from "react";

interface ClassificationMetricProps {
  model: string;
  c1: string;
  c1precision: string;
  c1recall: string;
  c1f1score: string;
  c1support: string;
  c2: string;
  c2precision: string;
  c2recall: string;
  c2f1score: string;
  c2support: string;
  accuracy: string;
  description: string;
}

const ClassificationMetrics: FC<ClassificationMetricProps> = ({
  model,
  c1,
  c2,
  c1precision,
  c2precision,
  c1recall,
  c2recall,
  c1f1score,
  c2f1score,
  c1support,
  c2support,
  accuracy,
  description,
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <h3 className='flex my-2 font-semibold leading-none text-rbg/80 cursor-pointer underline underline-offset-4 hover:text-rsecondary transition-colors'>
          <Box /> <span className='pt-1 pl-1'>Metrics</span>
        </h3>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-rfg/20 data-[state=open]:animate-overlayShow' />
        <Dialog.Content className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl font-roboto bg-rtertiary shadow-[0_2px_10px] shadow-rfg p-4 mx-auto max-w-[500px] animate-fadeIn'>
          <h1 className='text-center text-rbg/90 mb-2'>{model}</h1>

          <div className='grid grid-cols-2 gap-4 text-sm text-rbg/70'>
            <div className='text-center'>
              <h4 className='font-semibold text-rbg/80 mb-1'>{c1}</h4>
              <p className='font-medium'>
                <Popover.Root>
                  <Popover.Trigger className='transition-transform duration-150 hover:scale-[1.05] cursor-pointer'>
                    Precision: {c1precision}
                  </Popover.Trigger>
                  <Popover.Content
                    className='bg-rsecondary text-rfg text-sm rounded-md shadow-md p-4 max-w-[220px] leading-relaxed border border-rprimary/20'
                    sideOffset={6}
                  >
                    <p>
                      Precision: When the model says this is a "{c1}" event, how
                      often is it right?
                    </p>
                    <p className='mt-2'>
                      In this case, of all the times the model said this is a "
                      {c1}" event, it was right {c1precision} of the time.
                    </p>
                    <Popover.Arrow className='fill-rsecondary' />
                  </Popover.Content>
                </Popover.Root>
              </p>
              <p className='font-medium'>
                <Popover.Root>
                  <Popover.Trigger className='transition-transform duration-150 hover:scale-[1.05] cursor-pointer'>
                    Recall: {c1recall}
                  </Popover.Trigger>
                  <Popover.Content
                    className='bg-rsecondary text-rfg text-sm rounded-md shadow-md p-4 max-w-[220px] leading-relaxed border border-rprimary/20'
                    sideOffset={6}
                  >
                    <p>
                      Recall: Of all the times a "{c1}" event occured in the
                      data, how many did the model actually find?
                    </p>
                    <p className='mt-2'>
                      In this case, of all the times there were "{c1}" events in
                      this data, the model classified {c1recall} of those times
                      correctly
                    </p>
                    <Popover.Arrow className='fill-rsecondary' />
                  </Popover.Content>
                </Popover.Root>
              </p>
              <p className='font-medium'>
                <Popover.Root>
                  <Popover.Trigger className='transition-transform duration-150 hover:scale-[1.05] cursor-pointer'>
                    F1-score: {c1f1score}
                  </Popover.Trigger>
                  <Popover.Content
                    className='bg-rsecondary text-rfg text-sm rounded-md shadow-md p-4 max-w-[220px] leading-relaxed border border-rprimary/20'
                    sideOffset={6}
                  >
                    <p>
                      F1-score: How good is a model at finding "{c1}" events
                      <span className=' italic'> and </span>being right about
                      them
                    </p>
                    <p className='mt-2'>
                      In this case, the model had an F1-score of {c1f1score}
                    </p>
                    <Popover.Arrow className='fill-rsecondary' />
                  </Popover.Content>
                </Popover.Root>
              </p>
              <p className='font-medium'>
                <Popover.Root>
                  <Popover.Trigger className='transition-transform duration-150 hover:scale-[1.05] cursor-pointer'>
                    Support: {c1support}
                  </Popover.Trigger>
                  <Popover.Content
                    className='bg-rsecondary text-rfg text-sm rounded-md shadow-md p-4 max-w-[220px] leading-relaxed border border-rprimary/20'
                    sideOffset={6}
                  >
                    <p>
                      Support: How many actual cases of "{c1}" were there to
                      predict?
                    </p>
                    <p className='mt-2'>
                      In this case, {c1support} was the total number of "{c1}"
                      events the model was looking at
                    </p>
                    <Popover.Arrow className='fill-rsecondary' />
                  </Popover.Content>
                </Popover.Root>
              </p>
            </div>
            <div className='text-center'>
              <h4 className='font-semibold text-rbg/80 mb-1'>{c2}</h4>
              <p className='font-medium'>
                <Popover.Root>
                  <Popover.Trigger className='transition-transform duration-150 hover:scale-[1.05] cursor-pointer'>
                    Precision: {c2precision}
                  </Popover.Trigger>
                  <Popover.Content
                    className='bg-rsecondary text-rfg text-sm rounded-md shadow-md p-4 max-w-[220px] leading-relaxed border border-rprimary/20'
                    sideOffset={6}
                  >
                    <p>
                      Precision: When the model says this is a "{c2}" event, how
                      often is it right?
                    </p>
                    <p className='mt-2'>
                      In this case, of all the times the model said this is a "
                      {c2}" event, it was right {c2precision} of the time.
                    </p>
                    <Popover.Arrow className='fill-rsecondary' />
                  </Popover.Content>
                </Popover.Root>
              </p>
              <p className='font-medium'>
                <Popover.Root>
                  <Popover.Trigger className='transition-transform duration-150 hover:scale-[1.05] cursor-pointer'>
                    Recall: {c2recall}
                  </Popover.Trigger>
                  <Popover.Content
                    className='bg-rsecondary text-rfg text-sm rounded-md shadow-md p-4 max-w-[220px] leading-relaxed border border-rprimary/20'
                    sideOffset={6}
                  >
                    <p>
                      Recall: Of all the times a "{c2}" event occured in the
                      data, how many did the model actually find?
                    </p>
                    <p className='mt-2'>
                      In this case, of all the times there were "{c2}" events in
                      this data, the model classified {c2recall} of those times
                      correctly
                    </p>
                    <Popover.Arrow className='fill-rsecondary' />
                  </Popover.Content>
                </Popover.Root>
              </p>
              <p className='font-medium'>
                <Popover.Root>
                  <Popover.Trigger className='transition-transform duration-150 hover:scale-[1.05] cursor-pointer'>
                    F1-score: {c2f1score}
                  </Popover.Trigger>
                  <Popover.Content
                    className='bg-rsecondary text-rfg text-sm rounded-md shadow-md p-4 max-w-[220px] leading-relaxed border border-rprimary/20'
                    sideOffset={6}
                  >
                    <p>
                      F1-score: How good is a model at finding "{c2}" events
                      <span className=' italic'> and </span>being right about
                      them
                    </p>
                    <p className='mt-2'>
                      In this case, the model had an F1-score of {c2f1score}
                    </p>
                    <Popover.Arrow className='fill-rsecondary' />
                  </Popover.Content>
                </Popover.Root>
              </p>
              <p className='font-medium'>
                <Popover.Root>
                  <Popover.Trigger className='transition-transform duration-150 hover:scale-[1.05] cursor-pointer'>
                    Support: {c2support}
                  </Popover.Trigger>
                  <Popover.Content
                    className='bg-rsecondary text-rfg text-sm rounded-md shadow-md p-4 max-w-[220px] leading-relaxed border border-rprimary/20'
                    sideOffset={6}
                  >
                    <p>
                      Support: How many actual cases of "{c2}" were there to
                      predict?
                    </p>
                    <p className='mt-2'>
                      In this case, {c2support} was the total number of "{c2}"
                      events the model was looking at
                    </p>
                    <Popover.Arrow className='fill-rsecondary' />
                  </Popover.Content>
                </Popover.Root>
              </p>
            </div>
          </div>
          <div className='text-center text-sm text-rbg/70'>
            {/* Accuracy */}
            <Popover.Root>
              <Popover.Trigger className='transition-transform duration-150 hover:scale-[1.05] cursor-pointer font-semibold my-2'>
                Overall Accuracy: {accuracy}
              </Popover.Trigger>
              <Popover.Content
                className='bg-rsecondary text-rfg text-sm rounded-md shadow-md p-4 max-w-[220px] leading-relaxed border border-rprimary/20'
                sideOffset={6}
              >
                <p>
                  Accuracy measures how often the model was right overall across
                  both classes.
                </p>
                <p className='mt-2'>
                  It is the total number of correct predictions divided by the
                  total number of predictions made.
                </p>
                <Popover.Arrow className='fill-rsecondary' />
              </Popover.Content>
            </Popover.Root>
            <p>{description}</p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ClassificationMetrics;
