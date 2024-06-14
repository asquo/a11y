"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import styles from "./robust.module.css";

export const Robust = () => {
  const [isNonSemanticChecked, setIsNonSemanticChecked] = useState(false);
  const [isSemanticChecked, setIsSemanticChecked] = useState(false);
  const [isAriaSemanticChecked, setIsAriaSemanticChecked] = useState(false);

  const [isOpenCombo, setIsOpenCombo] = useState(false);
  const [selectedComboItem, setSelectedComboItem] = useState<{
    id: string;
    name: string;
  }>();
  const comboInputRef = useRef<HTMLInputElement>();
  const comboListRef = useRef<HTMLUListElement>();
  const comboListSelectItemIndexRef = useRef<number>(0);
  const [comboFilter, setComboFilter] = useState<string>();

  const comboDataSource = useMemo(() => {
    return [
      {
        id: "0",
        name: "Taglia XL",
      },
      {
        id: "1",
        name: "Taglia L",
      },
      {
        id: "2",
        name: "Taglia M",
      },
      {
        id: "3",
        name: "Taglia S",
      },
      {
        id: "4",
        name: "Taglia XS",
      },
    ];
  }, []);

  const filteredDsCombo = useMemo(() => {
    if (
      comboFilter == null ||
      comboFilter == undefined ||
      comboFilter.trim().length === 0
    ) {
      return comboDataSource;
    }
    return comboDataSource.filter((item) =>
      item.name.toLowerCase().includes(comboFilter?.toLowerCase())
    );
  }, [comboDataSource, comboFilter]);

  return (
    <div className={styles.container}>
      <h2 className="text-2xl font-semibold mb-3 mt-3">Esempi di checkbox</h2>
      <div className={styles.checkboxContainer}>
        <div
          className={styles.checkbox}
          onClick={() => {
            setIsNonSemanticChecked(!isNonSemanticChecked);
          }}
        >
          {" "}
          <div
            className={isNonSemanticChecked ? styles.checkbox_checked : ""}
          ></div>
        </div>
        Non semantico
      </div>

      <div className={styles.checkboxContainer}>
        <input
          id="semanticCheckbox"
          className={styles.semanticCheckbox}
          type="checkbox"
          onClick={() => {
            setIsSemanticChecked(!isSemanticChecked);
          }}
        ></input>
        <label htmlFor="semanticCheckbox">Semantico nativo</label>
      </div>

      <div className={styles.checkboxContainer}>
        <div
          role="checkbox"
          aria-checked={isAriaSemanticChecked}
          aria-labelledby="ariaSemanticCheckbox"
          className={styles.checkbox}
          tabIndex={0}
          onClick={() => {
            setIsAriaSemanticChecked(!isAriaSemanticChecked);
          }}
        >
          {" "}
          <div
            className={isAriaSemanticChecked ? styles.checkbox_checked : ""}
          ></div>
        </div>
        <label id="ariaSemanticCheckbox">Semantico con attributi aria</label>
      </div>

      <h2 className="text-2xl font-semibold mb-3 mt-3">Esempi di combobox</h2>
      <div>
        <label id="comboTaglie">Seleziona la taglia</label>
        <div>
          <input
            //@ts-ignore
            ref={comboInputRef}
            type="text"
            className={styles.customCombobox}
            role="combobox"
            aria-labelledby="comboTaglie"
            aria-controls="comboTaglieLista"
            aria-autocomplete="list"
            aria-expanded={isOpenCombo}
            aria-activedescendant={selectedComboItem?.id}
            value={comboFilter}
            onChange={(e) => {
              setComboFilter(e.currentTarget.value);
            }}
            onFocus={() => {
              setIsOpenCombo(true);
            }}
            onKeyDown={(e) => {
              switch (e.keyCode) {
                case 27:
                  setIsOpenCombo(false);
                  break;

                case 13:
                  const selectedElement =
                    filteredDsCombo[comboListSelectItemIndexRef.current];
                  setComboFilter(selectedElement.name);
                  setSelectedComboItem(selectedElement);
                  setIsOpenCombo(false);
                  break;

                case 38: {
                  if (!comboListRef.current) {
                    return;
                  }

                  const items = comboListRef.current.getElementsByClassName(
                    styles.comboItemActive
                  );
                  if (items && items.length > 0) {
                    --comboListSelectItemIndexRef.current;
                    if (comboListSelectItemIndexRef.current < 0) {
                      comboListSelectItemIndexRef.current = 0;
                    } else {
                      items[0].className = "";
                    }
                  }

                  const itemToSelect = comboListRef.current.children.item(
                    comboListSelectItemIndexRef.current
                  );
                  if (itemToSelect) {
                    itemToSelect.className = styles.comboItemActive;
                    comboInputRef.current?.setAttribute(
                      "aria-activedescendant",
                      filteredDsCombo[comboListSelectItemIndexRef.current]?.id
                    );
                  }
                  break;
                }

                case 40: {
                  if (!comboListRef.current) {
                    return;
                  }

                  if (!isOpenCombo) {
                    setIsOpenCombo(true);
                  }

                  const items = comboListRef.current.getElementsByClassName(
                    styles.comboItemActive
                  );
                  if (!items || items.length === 0) {
                    comboListSelectItemIndexRef.current = 0;
                  } else {
                    ++comboListSelectItemIndexRef.current;
                    if (
                      comboListSelectItemIndexRef.current >
                      filteredDsCombo.length - 1
                    ) {
                      comboListSelectItemIndexRef.current =
                        filteredDsCombo.length - 1;
                    } else {
                      items[0].className = "";
                    }
                  }

                  const itemToSelect = comboListRef.current.children.item(
                    comboListSelectItemIndexRef.current
                  );
                  if (itemToSelect) {
                    itemToSelect.className = styles.comboItemActive;
                    comboInputRef.current?.setAttribute(
                      "aria-activedescendant",
                      filteredDsCombo[comboListSelectItemIndexRef.current]?.id
                    );
                  }
                  break;
                }
              }
            }}
          />
          <div
            id="comboTaglieLista"
            role="listbox"
            aria-hidden={!isOpenCombo}
            hidden={!isOpenCombo}
            className={styles.customComboboxList}
          >
            {/* @ts-ignore */}
            <ul role="presentation" ref={comboListRef}>
              {filteredDsCombo.map((item) => {
                return (
                  <li
                    role="option"
                    key={item.id}
                    id={item.id}
                    aria-setsize={comboDataSource.length}
                    aria-posinset={
                      comboDataSource.findIndex(
                        (comboItem) => comboItem.id === item.id
                      ) + 1
                    }
                    onClick={() => {
                      setComboFilter(item.name);
                      setSelectedComboItem(item);
                      setIsOpenCombo(false);
                    }}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
