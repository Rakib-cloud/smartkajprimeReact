"use client";

export default function SectionWrapper({children,bg="",first=false,last=false}:any) {
    let classes = ''
    if(!first && !last){
        classes = 'py-8 lg:py-16'
    }if(!first && last){
        classes = 'pt-8 lg:pt-16'
    }if(first && !last){
        classes = 'pb-8 lg:pb-16'
    }
  return (
    <section className={`${classes} ${bg}`}>
        <div className="container">
            {children}
        </div>
    </section>
  )
}
