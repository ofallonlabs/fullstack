import Link from 'next/link';
import LoadingIndicator from '@/ui/components/common/link/link-loading-indicator';
 
type LinkStateType = {
    title: { idle:string, pending:string }, 
    style: { idle: string, pending:string }
}


export default function LinkWithState({href, state}: {href:string, state: LinkStateType}) {
  return (
    <>
      <Link href={href} prefetch={false}>
        <LoadingIndicator state={state} />
      </Link>
    </>
  )
}