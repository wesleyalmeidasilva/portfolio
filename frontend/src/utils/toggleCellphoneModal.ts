function toggleCellphoneModal (element: HTMLElement | null) {
  
  if(element) {
    
    if (element.style.display === 'none') {
      element.style.display = 'flex'
      return
    }
    
    if (element.style.display === 'flex') {
      element.style.display = 'none'
      return
    }

  } else {
    return
  }
}

export default toggleCellphoneModal
