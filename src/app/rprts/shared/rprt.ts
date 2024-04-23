export class Rprt {
	constructor(
		public id: number
		,public name: string
		,public displayName: string
		,public description: string
		,public disabled : number
		,public justification : string
	) 
	{}
}

export class RprtJ {
	constructor(
		public id : number,
		public justification: string,
		public rprt_id: number
	) 
	{}
}

