import { createContext, ReactNode, useContext, useEffect } from 'react'

import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'

type MenuDrawerContextData = UseDisclosureReturn

const MenuDrawerContext = createContext({} as MenuDrawerContextData)

interface MenuDrawerProviderProps {
  children: ReactNode
}

export function MenuDrawerProvider({
  children,
}: MenuDrawerProviderProps): JSX.Element {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <MenuDrawerContext.Provider value={disclosure}>
      {children}
    </MenuDrawerContext.Provider>
  )
}

export const useMenuDrawer = () => useContext(MenuDrawerContext)
