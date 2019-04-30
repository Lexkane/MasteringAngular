
export class Logger {

	public log(message: string) {
		console.log(message);
	}
}


export const SimpleLogger={
  log:(message:string)=>{
    console.log("simple logger",message);
  },
};
