import { clsx, type ClassValue } from "clsx"
import { isFuture } from "date-fns"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const init_fun = () => {
    return isFuture(new Date(2025, 1, 14))
}
