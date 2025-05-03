type ToastProps = {
  title: string
  description: string
}

export function toast(props: ToastProps) {
  // In a real implementation, this would show a toast notification
  console.log(`Toast: ${props.title} - ${props.description}`)
  return {
    id: Date.now(),
    ...props,
  }
}
