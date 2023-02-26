"use client";
import React, { useEffect } from "react";
import { model } from "../../lib/feature.lib";
import Select from "react-select";
import { listModels } from "../../lib/endpoint.api";

import useSwr from "swr";
import axios from "axios";

const fetchModels = async () => {
  const res = await axios.get("/api/getEngine");
  const modelOptions = res.data.models.data.map((model: any) => ({
    value: model.id,
    label: model.id,
  }));

  return modelOptions;
};

const ModelSelection = () => {
  const { data: models, error, isLoading } = useSwr("models", fetchModels);

  const { data: model, mutate: setModal } = useSwr("model", {
    fallbackData: "text-davinci-003",
  });

  console.log(model);
  return (
    <div>
      <Select
        defaultValue={model}
        className="my-3"
        options={models}
        isSearchable
        isLoading={isLoading}
        placeholder={model}
        onChange={(e) => {
          setModal(e.value);
        }}
        classNames={{
          control: (state) => "bg-[#141414] text-white",
          option: (state) => "bg-[#141414] text-white",
        }}
      />
    </div>
  );
};

export default ModelSelection;
