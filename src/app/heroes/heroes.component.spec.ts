import { HeroesComponent } from "./heroes.component";

describe("HeroesComponent", () => {
  let component = HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: "Alejandra Munoz", strength: 8 },
      { id: 2, name: "Whatever", strength: 24 },
      { id: 3, name: "Rock", strength: 2 }
    ];

    mockHeroService = jasmine.createSpyObj([
      "getHeroes",
      "addHero",
      "deleteHero"
    ]);
    component = new HeroesComponent(mockHeroService);

    describe("delete", () => {
      it("should remove the indicated hero from heroes list", () => {
        mockHeroService.deleteHero.and.returnValue(of(true));
        component.heroes = HEROES;

        component.delete(HEROES[2]);

        expect(component.heroes.length).toBe(2);
      });
    });
    it("should call deleteHero", () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      component.delete(HEROES[2]);
      expect(mockHeroService.deleteHero).toHaveBeenCalled(HEROES[2]);
    });
  });
});
