/** immutable class.
 * @author Rithika.
 */
public final class ImmutableClass {
	//simple attributes for testing purpose.
	final int attribute1;
	final double attribute2;
	final String attribute3;
	//immutable class constructor with three parameters.
	ImmutableClass(final int attribute1, final double attribute2, final String attribute3) {
		this.attribute1 = attribute1;
		this.attribute2 = attribute2;
		this.attribute3 = attribute3;
	}
	//returns value of attribute1
	public int getAttribute1() {
		return attribute1;
	}
	//returns value of attribute2
	public double getAttribute2() {
		return attribute2;
	}
	//returns value of attribute2
	public String getAttribute3() {
		return attribute3;
	}
	//method which initializes the immutable class object for one time.
	public static void main(final String[] args) {
		ImmutableClass immutableObject =
				new ImmutableClass(5, 6.0, "rithika");
		System.out.println(immutableObject.getAttribute1());
		System.out.println(immutableObject.getAttribute2());
		System.out.println(immutableObject.getAttribute3());
	}
}
