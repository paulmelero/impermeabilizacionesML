export const useDrawer = () => {
  const isDrawerOpen = useState<boolean>('drawerState', () => false)
  const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value
  }
  return {
    isDrawerOpen,
    toggleDrawer,
  }
}
