import clsx from 'clsx'
import LinkWithRef from '@/components/LinkWithRef'

const Custom404 = () => {
  return (
    <section
      className={
        'fixed inset-0 flex h-screen items-center justify-center px-4 text-center dark:bg-neutral-900 '
      }
    >
      <div className="space-y-10">
        <img
          src={require('@/img/folder.png')}
          alt="folder"
          className={clsx('mx-auto h-16 w-auto')}
        />
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <h1 className="text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-yellow-200 sm:mr-6 sm:border-r sm:border-neutral-900/50 sm:pr-6 sm:text-3xl sm:dark:border-yellow-300/50">
            404
          </h1>
          <h2 className="mt-2 text-lg text-neutral-700 dark:text-yellow-300 sm:mt-0">
            This page could not be found.
          </h2>
        </div>
        <LinkWithRef
          href="/"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 dark:bg-yellow-200 dark:hover:bg-yellow-300"
        >
          Go back home
        </LinkWithRef>
      </div>
    </section>
  )
}

export default Custom404
