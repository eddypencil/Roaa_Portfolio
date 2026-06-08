export default function SkillComponant({icon, name, description}) {
  const Icon = icon
  return (
    <div className='flex-col'>
        {Icon && <Icon className="text-[#479FFF] mb-3" />}
        <p className='text-xl mb-3'>{name}</p>
        <p>{description}</p>
    </div>
  )
}
