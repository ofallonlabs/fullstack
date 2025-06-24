"use client";

import type {TodoType} from "@/definition/dashboard/common/common-types";
import Link from "next/link";

export default function MentorTodoTable({todos}: {todos: TodoType[]}){

    return (
        todos.map((todo) => (
            <tr key={todo.action}>
                <td className="w-full max-w-0 py-4 pr-3 pl-4 text-xs lg:text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-4">
                {todo.action}
                <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Action</dt>
                    <dd className="mt-1 truncate text-xs  bg-red-200 rounded text-red-600 w-fit px-2 py-0.5">{todo.status}</dd>
                    <dt className="sr-only sm:hidden">Description</dt>
                    <dd className="mt-1 truncate text-xs text-gray-500 sm:hidden">{todo.description}</dd>
                </dl>
                </td>
                <td className="hidden px-3 py-4 truncate text-xs lg:table-cell">
                    <div className="bg-red-200 text-xs rounded text-red-600 w-fit px-2 py-0.5">{todo.status}</div>
                </td>
                <td className="hidden px-3 py-4 truncate text-sm text-gray-500 sm:table-cell">
                    <div className="flex flex-col gap-1">
            <div className="text-gray-900">{todo.description}</div>
            <div className="text-gray-500 text-sm">{todo.subdescription}</div>
                    </div>
                </td>
                <td className="min-w-[70px] py-4 pr-4 pl-3 text-right text-xs lg:text-sm font-medium sm:pr-4">
                    <Link href="#" className="text-brand-600 hover:text-brand-900">
                        Fix it<span className="sr-only">, {todo.action}</span>
                    </Link>
                </td>
            </tr>
        ))        
    );

}