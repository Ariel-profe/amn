import { FC } from 'react';
import { motion } from 'motion/react';

interface Props {
    filterItems: (category: string) => void;
    categories: string[];
    isSelected: string;
};

export const Categories:FC<Props> = ({filterItems, categories, isSelected}) => {
  return (
    <div className='relative mb-5 flex flex-col gap-y-3 w-full lg:w-1/5'>
        {categories.map( (category: string, index:number) =>(
            <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={`relative capitalize tracking-wider rounded-md ${isSelected === category ? 'text-slate-900 shadow-md dark:text-white' : 'text-slate-400'} h-10 bg-slate-100 dark:bg-slate-800`}
                onClick={() => filterItems(category)}
            >
                {category}
            </motion.button>
        ))}
    </div>
  )
}