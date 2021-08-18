import type { TypeA } from '@/common/types'

const Example: TypeA = {
  name: 'next',
}

export default function PackageHome() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <h1>
        <p>{Example.name}</p>
      </h1>
    </div>
  )
}