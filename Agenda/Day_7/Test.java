package Agenda.Day_7;
public class Test{
    int age;
    public static void main(String[] args) {
        Test t = new Test();
        Test t1 = t;

        Test t2 = new Test();
        t2.age = 123;
        t1.age = 45;
        System.out.println(t.age);
        System.out.println(t1.age);
        
        System.out.println(t2.age);
        System.out.println(t1.age);
        System.out.println(t1 == t);
    }
}