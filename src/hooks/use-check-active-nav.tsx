import { useLocation } from 'react-router-dom'

/* export default function useCheckActiveNav() {
  const { pathname } = useLocation()

  const checkActiveNav = (nav: string) => {
    const pathArray = pathname.split('/').filter((item) => item !== '')

    if (nav === '/' && pathArray.length < 1) return true as boolean

    return pathArray.includes(nav.replace(/^\//, ''))
  }
  console.log(pathname)
  return { checkActiveNav }
}
 */
export default function useCheckActiveNav() {
  const { pathname } = useLocation()

  const checkActiveNav = (nav: string) => {
    // Entfernen von führenden und abschließenden Slashes zur besseren Vergleichbarkeit
    const pathArray = pathname.split('/').filter((item) => item !== '')
    const navArray = nav.split('/').filter((item) => item !== '')

    // Exakte Übereinstimmung von Pfad und Nav prüfen
    return (
      pathArray.length === navArray.length &&
      pathArray.every((pathItem, index) => pathItem === navArray[index])
    )
  }

  return { checkActiveNav }
}
