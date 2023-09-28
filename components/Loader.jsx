const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-16 h-16 border-t-6 border-r-2 border-b-6 border-white rounded-full animate-spin border-slate-500'></div>
    </div>
  )
}

export default LoadingSpinner