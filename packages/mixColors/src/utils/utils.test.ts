import * as utils from "./utils"
// @ponicode
describe("utils.toRGB", () => {
    test("0", () => {
        let callFunction: any = () => {
            utils.toRGB("0xb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            utils.toRGB("0x3")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            utils.toRGB("0xA")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            utils.toRGB("0x9")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            utils.toRGB("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.toHEX", () => {
    test("0", () => {
        let callFunction: any = () => {
            utils.toHEX(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            utils.toHEX(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            utils.toHEX(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            utils.toHEX(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            utils.toHEX(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            utils.toHEX(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.normalizePercentage", () => {
    test("0", () => {
        let callFunction: any = () => {
            utils.normalizePercentage("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            utils.normalizePercentage(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            utils.normalizePercentage(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            utils.normalizePercentage("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            utils.normalizePercentage("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            utils.normalizePercentage(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.isPercentageValid", () => {
    test("0", () => {
        let callFunction: any = () => {
            utils.isPercentageValid(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            utils.isPercentageValid(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            utils.isPercentageValid("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            utils.isPercentageValid("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            utils.isPercentageValid(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            utils.isPercentageValid(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.normalizeColor", () => {
    test("0", () => {
        let callFunction: any = () => {
            utils.normalizeColor("#rgb(20%,10%,30%)")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            utils.normalizeColor("#")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            utils.normalizeColor("black##rgb(0,100,200)")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            utils.normalizeColor("red")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            utils.normalizeColor("rgb(0,100,200)")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            utils.normalizeColor("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.isColorValid", () => {
    test("0", () => {
        let callFunction: any = () => {
            utils.isColorValid("red")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            utils.isColorValid("#FF00FF")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            utils.isColorValid("rgb(0,100,200)")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            utils.isColorValid("green")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            utils.isColorValid("rgb(20%,10%,30%)")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            utils.isColorValid("")
        }
    
        expect(callFunction).not.toThrow()
    })
})
