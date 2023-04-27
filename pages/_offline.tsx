// TODO: Improve offline page

import Layout from "@components/layout"

export default function OffLine() {
	return (
		<Layout>
			<div style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh'
			}}>
				<h1>Offline</h1>
				<p>
					You are offline. Please check your internet connection and try again.
				</p>
			</div>
	  </Layout>
  )
}
