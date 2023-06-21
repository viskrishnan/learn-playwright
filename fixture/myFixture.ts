import {test as myTest} from "@playwright/test"

type krishnan = { 
    age: number, 
    email: string,

}
myTest.extend<krishnan>({})