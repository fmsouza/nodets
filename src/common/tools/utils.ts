class Utils{
	
	public static replacePattern(pattern: RegExp, piece: string, text: string): string {
		return text.replace(pattern, piece);
	}
}
export = Utils;